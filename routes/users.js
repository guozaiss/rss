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
    conn.query("select * from showAlltb_meizhi", function(err, res) {
        // if (err) {
        //     res.send('ssss');
        // } else {
        //     res.send('ssss');
        // }
    });
    conn.end();
    // res.send('respond with a resource');
});

module.exports = router;