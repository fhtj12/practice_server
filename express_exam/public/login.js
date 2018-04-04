var express = require('express'), http = require('http');
var static = require('serve-static'),path = require('path');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
app.use('/pub', static( path.join( __dirname, 'public')));
app.use( function(req, res, next) {
res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
res.end('<h1>Express 서버 응답 id: ' + req.body.id + ' passws: ' + req.body.password + ' .</h1>');
});
http.createServer(app).listen( 8080, function(){
console.log('익스프레스 서버를 시작' );
});
