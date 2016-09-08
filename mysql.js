var mysql = require('mysql');
var async = require('async');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'meizhi',
    port: 3306
});

var index = 0;
exports.find = function(sql) {
    conn.connect();
    conn.query(sql, function(err, res) {
        console.log(res);
        return res;

    });
    conn.end();
};
