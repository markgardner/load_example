var path = require('path'),
	express = require('express');
var app = express();

app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/bower_components')));

app.get('/', function(req, res) {
	res.render('index', {
		app: process.env.APP_NAME
	});
});

app.get('/req', function(req, res) {
	res.writeHead(200, {
		'Cache-Control': 'no-cache, no-store, must-revalidate',
		Pragma: 'no-cache',
		Expires: 0
	});

	res.end('success');
});

app.listen(9020);