var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//env port
var port = process.env.PORT || 3000;

var urlencodedParser = bodyParser.urlencoded({extended: false});
var jsonParser = bodyParser.json();

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

app.get('/api/person/:id', urlencodedParser, function (req, res) {
	//get data
});

app.post('/api/person', urlencodedParser, function (req, res) {
	//save
});

app.delete('/api/person/:id', function (req, res) {
	//delete
});

app.get('/person/:id', function (req, res) {
	res.render('person', {
		ID: req.params.id
	});
});

app.post('/person', urlencodedParser, function (req, res) {
	res.send('Thank you!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.post('/person-json', jsonParser, function (req, res) {
	res.send('Thank you for the JSON data!');
	console.log(req.body.firstname);
	console.log(req.body.lastname);
});

app.listen(port);
