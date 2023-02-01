const app = require("./app/app");
const port = process.env.port || 8800;
const color = require("colors");

const connectDB = require("./utils/database");


connectDB()


app.listen(port, () => {
  console.log(color.yellow(`practice server running on ${port}`.bold));
});
