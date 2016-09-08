var express = require('express');
var router = express.Router();
var mysql = require('../mysql');
/* GET home page. */
router.post('/', function(req, res) {
    req.on('data', function(data) {
    	var dt=decodeURIComponent(data);

        console.log(dt+"");
    });

    var id = req.body.id;
    mysql.find("select * from tb_meizhi where id=" + id, function(ress) {
        res.send("ssssssssssssssss");
    });

    // if (err) {
    //         res.send("error");
    //     }

    //     res.send(ress);
});
module.exports = router;
