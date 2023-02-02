const Sequelize = require("sequelize");

const sequelize = new Sequelize("nodejs", "root", "shariar2317", {
  dialect: "mysql",
  host: "localhost",
});


module.exports = sequelize;
