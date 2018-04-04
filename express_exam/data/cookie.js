var express = require('express'), http = require('http'),
router = express.Router();
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser());
router.route('/showCookie').get(function(req, res, next) {
res.send( req.cookies);
});
router.route('/setCookie').get(function(req, res, next) {
res.cookie('c_data',{ id: 'q1w2e3'});
res.redirect('/showCookie');
});
app.use('/', router);
http.createServer(app).listen( 8080, function(){
console.log('익스프레스 서버를 시작' );
})
