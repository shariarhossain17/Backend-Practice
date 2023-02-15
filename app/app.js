const express = require("express");

const cors = require("cors");
const path = require("path");
require("dotenv").config()
const {graphqlHTTP} = require("express-graphql")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "images")));

app.use((err, req, res, next) => {
  const status = err.statusCode || 500;
  const message = err.message;
  console.log(message);
  res.status(status).json({
    status: false,
    message: message,
  });
});

const graphqlSchema = require("../grapql/schema")
const graphqlResolver = require("../grapql/resolver")

app.use('/grapql',graphqlHTTP({
  schema:graphqlSchema,
  rootValue:graphqlResolver,
  graphql:true
}))



const postRoute = require("../router/post.route");
const userRoute = require("../router/user.route")

app.use("/api/v1/post", postRoute);
app.use("/api/v1/auth",userRoute)

module.exports = app;
