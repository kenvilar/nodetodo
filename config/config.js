var configValues = require('./configValues');

module.exports = {

	getDbConnectionString: function () {
		return 'mongodb://' + configValues.uname + ':' + configValues.pw + '@' + configValues.hostname + ':' + configValues.port + '/' + configValues.name + '';
	}

};
