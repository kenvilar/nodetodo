angular.module('MyApp', []);
angular.module('MyApp')
	.controller('MainController', ctrlFunc);

function ctrlFunc() {
	this.responding = 'RESPONDING...';
	this.ejs_template_engine = 'EJS Template Engine';
	this.message = 'SIMPLE WEB SERVER';

	this.people = [
		{ name: 'Ken Vilar' },
		{ name: 'Kevin Vilar' },
		{ name: 'Black Panther' }
	];
}
