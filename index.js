var express = require('express');
var app = express();
var config = require('./config/config');
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');

//env port
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request URL: ' + req.url);

	config.query(
		'SELECT people.id, firstname, lastname, address FROM people INNER JOIN personaddresses ON people.ID = personaddresses.peopleid INNER JOIN addresses ON personaddresses.addressesid = addresses.personaddressesid',
		function (err, rows) {
			if (err) throw err;
			for (var i = 0; i < rows.length; i++) {
				console.log(rows[i].firstname + ' ' + rows[i].lastname);
			}
		}
	);

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
