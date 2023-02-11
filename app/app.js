const express = require("express");
const cors = require("cors");
require("dotenv").config();
const session = require("express-session")

const app = express();

app.use(cors());
app.use(express.json());
app.use(session({
    secret:"my-secret",
    resave:false,
    saveUninitialized:false,
}))


const productRoute = require("../router/product.route");
const userRoute = require("../router/user.route");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);



module.exports = app;
