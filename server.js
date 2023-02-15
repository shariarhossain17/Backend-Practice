const app = require("./app/app");
const port = process.env.port || 8800;
const color = require("colors");
const cors = require("cors")

const { Server } = require("socket.io");





const connectDB = require('./db/dbConnect');




connectDB()

const server = app.listen(port, () => {
  console.log(color.yellow(`practice server running on ${port}`.bold));
});

