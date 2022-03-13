const mysql  = require('mysql2');
const util = require('util');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.HOST;
const database = process.env.SCHEMA_NAME;
const dbPassword = process.env.DB_PASSWORD;
const user = process.env.DB_USER; 
const port = process.env.DB_PORT;

var pool = exports.pool = mysql.createPool({
    connectionLimit: 1,
    host: host,
    user: user,
    password: dbPassword,
    database: database,
    port: port
});

pool.query = util.promisify(pool.query);