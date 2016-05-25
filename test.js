var cheerio = require('cheerio');
var $ = cheerio("<title>雷锋网</title><link>http://www.leiphone.com</link>");
var $title = cheerio('link', "<title>雷锋网</title><link>http://www.leiphone.com</link>");

console.log($title.text());