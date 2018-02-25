const express = require('express');
var app = express();
const mongoose = require('mongoose');
const config = require('./config/config');
const setupController = require('./controllers/setupController');
const apiController = require('./controllers/apiController');

var port = process.env.PORT || 3000;

app.use('/', express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(config.getDbConnectionString());

setupController(app);
apiController(app);

app.listen(port);
