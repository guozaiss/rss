var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var mysql = require('mysql');
    var async = require('async');
    var conn = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '123456',
        database: 'meizhi',
        port: 3306
    });
    conn.connect();
    conn.query("select * from sss", function(err, ress) {
        res.send(ress[0]);
    });
    conn.end();
});

module.exports = router;
