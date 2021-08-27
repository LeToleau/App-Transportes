var md5 = require('md5');
var mysql = require('mysql');
var util = require('util');
var db = require('./bd');


var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'transporte',
    password: '',
    port: 3306
});

db.query = util.promisify(db.query);

async function getUserByUsernameAndPassword(user, password) {
    try {
        var query = 'SELECT * FROM usuarios WHERE usuario = ? AND password = ? LIMIT 1';
        var rows = await db.query(query, [user, md5(password)]);
        return rows[0];
    } catch (error) {
        console.log(error);
    }
}

module.exports = { getUserByUsernameAndPassword }