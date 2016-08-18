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

var sqls = {
    'insertSQL': 'insert into tb_meizhi(id,fileName) values("conan","conan.png")',
    'selectSQL': 'select * from tb_meizhi limit 10',
    'deleteSQL': 'delete from tb_meizhi',
    'updateSQL': 'update tb_meizhi set id="asdf" ,fileName="asdf.png"  where id="conan"'
};

var index = 0;
 conn.query("call meizhi.insert('asd','asd')", function(err, res) {
        index++;
        console.log(res);
        // callback(err, res);
        // if (index == 5) {
        //     conn.end();
        // }
    });
// var tasks = ['deleteSQL', 'insertSQL', 'selectSQL', 'updateSQL', 'selectSQL'];
// async.eachSeries(tasks, function(item, callback) {
//     console.log(item + " ==> " + sqls[item]);
//     conn.query(sqls[item], function(err, res) {
//         index++;
//         console.log(res);
//         callback(err, res);
//         if (index == 5) {
//             conn.end();
//         }
//     });
// }, function(err) {
//     console.log("err: " + err);
// });

conn.end();
