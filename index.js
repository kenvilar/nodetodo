var express = require('express');
var app = express();

//env port
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request URL: ' + req.url);
	next(); //after using this middleware then proceed to the next middlware
});

app.get('/', function (req, res) {
	res.render('index');
});

app.get('/api', function (req, res) {
	var obj = {
		firstname: 'Ken',
		lastname: 'Vilar'
	};
	res.send(obj);
});

app.get('/person/:id', function (req, res) {
	res.render('person', {
		ID: req.params.id
	});
});

app.listen(port);
