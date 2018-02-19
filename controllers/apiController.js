var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = function (app) {
	app.get('/api/person/:id', urlencodedParser, function (req, res) {
		//get data
	});

	app.post('/api/person', urlencodedParser, function (req, res) {
		//save
	});

	app.delete('/api/person/:id', function (req, res) {
		//delete
	});
};
