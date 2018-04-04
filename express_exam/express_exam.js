var express = require('express'), http = require('http');
var app = express();

app.use(function(req, res, next) {
    console.log('미들웨어 1');
    req.newData = 'testData';
    next(); // 마지막 이전 미들웨어는 항상 호출 해야함
});

app.use(function(req, res, next) {
    console.log('미들웨어 2');

    res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
    res.end('<h1>Express 서버 응답 => 데이터' + req.newData + '.</h1>');
    // 마지막 미들웨어는 호출 해야함.
});

http.createServer(app).listen(8080, function() {
    console.log('익스프레스 서버를 시작');
});
