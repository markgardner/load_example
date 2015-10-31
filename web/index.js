var http = require('http');

var server = http.createServer(function(req, res) {
	res.end('hello, I\'m ' + process.env.APP_NAME);
});

server.listen(9020);