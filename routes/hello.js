var express = require('express');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res) {
    var id = req.body.id;
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
    conn.query("select * from tb_meizhi where id="+id, function(err, ress) {
        if (err) {
            res.send("error");
        }

        res.send(ress);
    });
    conn.end();
});
module.exports = router;
