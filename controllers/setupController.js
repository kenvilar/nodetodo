var Todos = require('../models/todomodel');
var express = require('express');
var app = express();

module.exports = function (app) {
	app.get('/api/setupTodos', function (req, res, next) {

		var seedTodos = [
			{
				username: 'test',
				todo: 'Buy Yakult',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Drink Milk',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Learn JavaScript',
				isDone: false,
				hasAttachment: false
			},
			{
				username: 'test',
				todo: 'Learn NodeJS',
				isDone: false,
				hasAttachment: false
			}
		];

		Todos.create(seedTodos, function (err, rows) {
			res.send(rows);
		});

	});
};
