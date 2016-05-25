var request = require('request');
var cheerio = require('cheerio');
var iconv = require('iconv-lite');
var requrl = 'http://www.leiphone.com/feed';
request(requrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body);    //返回请求页面的HTML
        acquireData(body);
    }
})

function acquireData(data) {
    var $ = cheerio.load(data); //cheerio解析data

    $('item').each(function(idx, element) {
        // var $element = $(element);
        //       console.log($element);

        // var $category = $('category',element);
        // console.log($category.text());

        // var $title=$('title',element);
        // console.log($title.text());

        var $link = $('link', element);
        console.log($link);

        // var $description=$('description',element);
        // console.log($description.html());

        //  var $pubDate=$('pubDate',element);
        // console.log($pubDate.html());

        // var $comments=$('comments',element);
        // console.log($comments.html()+"\n");
    });
}