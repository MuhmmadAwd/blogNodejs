
const mysql = require("mysql2")
const query =  mysql.createConnection({
    host:"localhost",
    database:"blogdb",
    user:"root",
    password:""
})

module.exports=query