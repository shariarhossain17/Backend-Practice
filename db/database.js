const mySql = require("mysql2");



const pool = mySql.createPool({
    host:"localhost",
    user:"root",
    database:"node_js_server",
    password:"shariar2317"
})




module.exports = pool.promise();