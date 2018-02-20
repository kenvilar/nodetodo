var express = require('express');
var app = express();
//var config = require('./config/config');
var apiController = require('./controllers/apiController');
var htmlController = require('./controllers/htmlController');
var config = require('./config/config-mongodb');
var mongoose = require('mongoose');

//Mongoose
/*
var Schema = mongoose.Schema;

var personSchema = new Schema({
	firstname: String,
	lastname: String,
	address: String
});

var Person = mongoose.model('Person', personSchema);

var kenvilar = Person({
	firstname: 'Ken',
	lastname: 'Vilar',
	address: 'Cebu City'
});

//save
kenvilar.save(function (err) {
	if (err) throw err;

	console.log('Person Saved!');
});

var blackpanther = Person({
	firstname: 'Black',
	lastname: 'Panther',
	address: 'Cebu City'
});

blackpanther.save(function (err) {
	if (err) throw err;

	console.log('Person Saved!');
});
*/

//env port
var port = process.env.PORT || 3000;

app.use('/assets', express.static(__dirname + '/public'));
app.use('/bower_components', express.static(__dirname + '/bower_components'));

app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request URL: ' + req.url);

	//comment this code if the used database is mongodb and not mysql
	// config.query(
	// 	'SELECT people.id, firstname, lastname, address FROM people INNER JOIN personaddresses ON people.ID = personaddresses.peopleid INNER JOIN addresses ON personaddresses.addressesid = addresses.personaddressesid',
	// 	function (err, rows) {
	// 		if (err) throw err;
	// 		for (var i = 0; i < rows.length; i++) {
	// 			console.log(rows[i].firstname + ' ' + rows[i].lastname);
	// 		}
	// 	}
	// );

	/*Person.find({}, function (err, persons) {
		if (err) throw err;

		console.log(persons);
	});*/

	next(); //after using this middleware then proceed to the next middlware
});

app.get('/api', function (req, res) {
	var obj = {
		firstname: 'Ken',
		lastname: 'Vilar'
	};
	res.send(obj);
});

//controllers
htmlController(app);
apiController(app);

app.listen(port);
