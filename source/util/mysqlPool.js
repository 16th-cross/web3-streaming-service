const mysql  = require('mysql2');
const util = require('util');

const host = '127.0.0.1';
const database = '16thcross';
const dbPassword = 'password';
const user = 'root'; 
const port = '3306';

var pool = exports.pool = mysql.createPool({
    connectionLimit: 1,
    host: host,
    user: user,
    password: dbPassword,
    database: database,
    port: port
});

pool.query = util.promisify(pool.query);