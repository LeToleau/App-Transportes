var mysql = require('mysql');
var util = require('util');

var db = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
});

db.query = util.promisify(db.query);

module.exports = db;