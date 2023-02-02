const app = require("./app/app");
const port = process.env.port || 8800;
const color = require("colors");

const sequelize = require("./db/database");

// const connectDb = async () => {
//   try {
//     await sequelize.authenticate();
//     console.log("Connection has been established successfully.");
//   } catch (error) {
//     console.error("Unable to connect to the database:", error);
//   }
// };

// connectDb();

sequelize
  .sync()
  .then((result) => {})
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(color.yellow(`practice server running on ${port}`.bold));
});
