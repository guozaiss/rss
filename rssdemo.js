var feedparser=require('ortoo-feedparser');

var url="http://news.baidu.com/n?cmd=1&class=civilnews&tn=rss";

feedparser.parseUrl(url).on('article',function(article){
	console.log('title',article.title);
});