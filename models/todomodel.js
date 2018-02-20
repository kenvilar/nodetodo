var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Todos = mongoose.model('Todos', new Schema({
	username: String,
	todo: String,
	isDone: Boolean,
	hasAttachment: Boolean
}));

module.exports = Todos;
