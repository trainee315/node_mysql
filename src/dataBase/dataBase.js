"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mysql = require("mysql");
var connection = mysql.createConnection({
    host: '124.222.147.181',
    user: 'root',
    password: '123456',
    database: 'database_mysql'
});
connection.connect();
console.log();
connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
    if (error)
        throw error;
    console.log('The solution is: ', results[0].solution);
});
