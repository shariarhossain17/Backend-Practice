const app = require("./app/app");
const port = process.env.port || 8800;
const color = require("colors");

const sequelize = require("./db/database");

const User = require("./models/user.model");

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
  // .sync({force:true})
  .sync()
  .then((result) => {
    return User.findByPk(2);
  })
  .then((user) => {
    if (!user) {
      return User.create({ name: "shariar", email: "shariar@gmail.com" });
    }

    return user;
  })
  .then((user) => {
    // console.log(user);
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(port, () => {
  console.log(color.yellow(`practice server running on ${port}`.bold));
});
