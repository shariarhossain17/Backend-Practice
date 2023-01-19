const app = require("./app/app");
const port = process.env.port || 8800;
const color = require("colors");



app.listen(port, () => {
  console.log(color.yellow(`practice server running on ${port}`.bold));
});
