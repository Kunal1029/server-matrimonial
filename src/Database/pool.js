const mysql = require("mysql2");
const dotenv = require('dotenv')
dotenv.config();

// const pool = mysql.createPool({
//     host: 'localhost',
//     port: 3306, // Optional, defaults to 3306
//     user: 'root',
//     password: 'Rajgupta@1234',
//     database: 'testing'
// });
const pool = mysql.createPool({
    host: process.env.HOST,
    port: process.env.PORT, // Optional, defaults to 3306
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

module.exports = pool;
