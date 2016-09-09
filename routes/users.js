var express = require('express');
var router = express.Router();
var mysql = require('../libs/mysql');

/* GET users listing. */
router.get('/', function(req, res, next) {

    mysql.find("select * from showpersondetails", function(err, ress) {
        if (err) {
            res.send("数据查询失败...");
            return;
        }
        console.log('返回结果↓↓↓');
        res.send(ress);
    });

    process.on('uncaughtException', function(err) {
        res.send('出现异常，异常信息为：' + err);
    });
});

module.exports = router;
