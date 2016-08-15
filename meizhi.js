var request = require('request');
var fs = require("fs");
var cheerio = require('cheerio');
var path = require('path');
var downpath = 'C:/Users/Admin/Desktop/images/';
var hhh = "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.106 Safari/537.36";
var options = {
    url: 'http://jandan.net/ooxx/page-1923',
    headers: {
        'Host': 'jandan.net',
        'Connection': 'Keep-Alive',
        'User-Agent': hhh
    }
};
var repeatTime = 1000;
var timeout = setInterval(function() { //每repeatTime毫秒执行一次
    getNetWorkSource();
}, repeatTime);

//获取网络资源
function getNetWorkSource() {
    request(options, function(error, response, body) {
        console.log(response.statusCode);
        if (!error && response.statusCode == 200) {
            // console.log(body);    //返回请求页面的HTML
            acquireData(body);
        } else {
            if (response.statusCode == 503) {
                hhh = hhh + '1';
            } else {
                clearTimeout(timeout);
            }
        }
    })
}

//获取需要的数据
function acquireData(data) {
    var $ = cheerio.load(data);
    var meizi = $('div.row').toArray();
    console.log(meizi.length);
    var len = meizi.length;
    for (var i = 0; i < len; i++) {
        var row = meizi[i];
        var $ = cheerio.load(row);

        console.log($('strong').text());
        var imgsrc = $('a.view_img_link').attr('href');
        console.log(imgsrc);
        var filename = parseUrlForFileName(imgsrc); //生成文件名
        downloadImg(imgsrc, filename, function() {
            console.log(filename + '下载完毕');
        });
    }
}

//取文件名
function parseUrlForFileName(address) {
    var filename = path.basename(address);
    return filename;
}

//下载文件
var downloadImg = function(uri, filename, callback) {
    request.head(uri, function(err, res, body) {
        // console.log('content-type:', res.headers['content-type']); //这里返回图片的类型
        // console.log('content-length:', res.headers['content-length']); //图片大小
        if (err) {
            console.log('err: ' + err);
            return false;
        }
        console.log(filename + '可以下载');
        fs.exists(downpath + filename, function(exists) {
            if (!exists) {
                console.log('不存在');
                request(uri).pipe(fs.createWriteStream(downpath + filename)).on('close', callback); //调用request的管道来下载到 images文件夹下
            } else {
                console.log("文件已存在");
            }
        });
    });
};
