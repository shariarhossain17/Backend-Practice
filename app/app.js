const express = require("express");

const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());


const postRoute = require('../router/post.route')


app.use("/api/v1/post",postRoute)




module.exports = app;
