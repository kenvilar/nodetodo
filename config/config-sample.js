var mysql = require('mysql');

function config() {
	return mysql.createConnection({
		host: '', // database host
		user: '', // database username
		password: '', // database password
		database: '' // database name
	});
}

module.exports = config();
