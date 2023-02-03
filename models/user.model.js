const {DataTypes} = require("sequelize");

const sequelize = require("../db/database")


const User = sequelize.define("user",{
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    role:{
        type:DataTypes.ENUM(["user","admin"]),
        allowNull:false,
        defaultValue:"user"
    }
})


module.exports = User;