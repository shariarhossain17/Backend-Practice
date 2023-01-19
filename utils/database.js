const mysql = require("mysql2");



const pool = mysql.createPool({
    host:'localhost',
    user:"root",
    database:"node_js_server",
    password:"nodejsserver"
});




module.exports  = pool.promise();
