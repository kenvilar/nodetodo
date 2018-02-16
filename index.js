var express = require('express');
var app = express();

//env port
var port = process.env.PORT || 3000;

app.get('/', function (req, res) {
	res.send('<html><head></head><body><h1>RESPONDING...</h1></body></html>');
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
