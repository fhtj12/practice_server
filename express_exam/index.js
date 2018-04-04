var express = require('express')
var http = require('http');
var app = express();

app.use(function(req, res, next) {
    console.log('첫번째 미들웨어');
    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버 응답.</h1>');
});

http.createServer(app).listen(1223, function() {
    console.log('익스프레스 서버를 시작');
});
