var express = require('express');
var router = express.Router();
var mysql = require('../libs/mysql');
/* GET home page. */
router.post('/', function(req, res) {
    req.on('data', function(data) {
        var dt = decodeURIComponent(data);
        console.log(dt[15]);
        res.send(dt);
    });

    // var id = req.body.id;
    // console.log(req.forms);
    // console.log(id);
    // mysql.find("select * from tb_meizhi where id=" + id, function(err, ress) {
    //     if (err) {
    //         res.send("err");
    //         return;
    //     }
    //     res.send(ress);
    // });

});
module.exports = router;
