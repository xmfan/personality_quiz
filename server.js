'use strict';

var express = require('express'),
	app = express();
var bodyParser = require('body-parser');

var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

app.listen(port, function() {
	console.log('Server running on: 4000');
});
