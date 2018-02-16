var express = require('express');
var app = express();

//env port
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.use('/', function (req, res, next) {
	console.log('Request URL: ' + req.url);
	next(); //after using this middleware then proceed to the next middlware
});

app.get('/', function (req, res) {
	res.send('<html><head><link rel="stylesheet" type="text/css" href="assets/style.css"></head><body><h1>RESPONDING...</h1></body></html>');
});

app.get('/api', function (req, res) {
	var obj = {
		firstname: 'Ken',
		lastname: 'Vilar'
	};
	res.send(obj);
});

app.get('/person/:id', function (req, res) {
	res.send('<html><head></head><body><h1>Person: ' + req.params.id + '</h1></body></html>');
});

app.listen(port);
