var express = require('express');
var app = express();
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

//env port
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request URL: ' + req.url);
	next(); //after using this middleware then proceed to the next middlware
});

app.get('/api', function (req, res) {
	var obj = {
		firstname: 'Ken',
		lastname: 'Vilar'
	};
	res.send(obj);
});

htmlController(app);
apiController(app);

app.listen(port);
