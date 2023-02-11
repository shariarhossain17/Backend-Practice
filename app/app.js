const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session")


const mongoDbStore = require("connect-mongodb-session")(session);


const app = express();


const store =  new mongoDbStore({
    uri:"mongodb://127.0.0.1:27017/mongodb",
    collection:"session"
})

app.use(cors());
app.use(express.json());
app.use(session({
    secret:"my-secret",
    resave:false,
    saveUninitialized:false,
    store:store
}))


const productRoute = require("../router/product.route");
const userRoute = require("../router/user.route");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);



module.exports = app;
