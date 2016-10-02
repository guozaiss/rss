var mysql = require('mysql');
var async = require('async');
var conn;
// 创建连接
var createConnection = function() {
    conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'meizhi',
        port: 3306
    });
}

var index = 0;
// 查询
exports.find = function(sql, callback) {
    createConnection();
    conn.connect();
    console.log(sql);
    conn.query(sql, function(err, res) {
        if (typeof(res) == "undefined") {
            console.log("返回数据为空！");
            callback(true, "");
        } else {
            console.log(res);
            callback(false, res);
        }
    });
    conn.end();
};
