var express = require('express'), http = require('http');
var app = express();
app.use(function(req, res, next) {
res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.end('<h1>Express 서버 응답 => 요청 ' + req.query.name + ' .</h1>');
});
http.createServer(app).listen( 8080, function(){
console.log('익스프레스 서버를 시작' );
});
