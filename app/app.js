const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

const productRoute = require("../router/product.route");

app.use("/api/v1", productRoute);

module.exports = app;
