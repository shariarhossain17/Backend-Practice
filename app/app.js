const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());
app.use((req, res, next) => {
    User.findByPk(2).then((user) => {
      req.user = user;
      next();
    });
  });

const productRoute = require("../router/product.route");
const userRoute = require("../router/user.route");

app.use("/api/v1", productRoute);
app.use("/api/v1", userRoute);


// one two many relation

const Product = require("../models/product.model")
const User = require("../models/user.model")

Product.belongsTo(User,{constrains:true,onDelete:'CASCADE'})

module.exports = app;
