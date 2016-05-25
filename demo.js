var request = require('request');
var cheerio = require('cheerio');
var requrl = 'http://www.leiphone.com/feed';
request(requrl, function(error, response, body) {
    if (!error && response.statusCode == 200) {
        // console.log(body);    //返回请求页面的HTML
        acquireData(body);
    }
})

function acquireData(data) {
    var $ = cheerio.load(data, {
        normalizeWhitespace: true,
        xmlMode: true
    }); //cheerio解析data

    $('item').each(function(idx, element) {
        var news = {
            category: $('category', element).text(),
            title: $('title', element).text(),
            link: $('link', element).text(),
            description: $('description', element).text(),
            pubDate: $('pubDate', element).text(),
            comments: $('comments', element).text()
        }

        console.log(news);
    });
}