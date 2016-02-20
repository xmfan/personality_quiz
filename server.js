'use strict';

var express = require('express'),
	app = express();
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');

var port = process.env.PORT || 4000;

app.use(bodyParser.json());
app.use(express.static('public'));

var my_profile = "Call me Ishmael. Some years ago-never mind how long precisely-having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people's hats off-then, I account it high time to get to sea as soon as I can.";

app.get('/api/gen', function(req, res) {
    // do some bluemix thing
    //console.log(req.body)

    var personality_insights = watson.personality_insights({
        username: '0af01859-8e30-43e6-91c1-afdf4bc38de5',
        password: '8B17hGcrXduV',
        version: 'v2'
    });

    personality_insights.profile({ text: my_profile },

    function (err, profile) {
    if (err)
        console.log(err)
    else
        res.send(profile);
    });
});

app.listen(port, function() {
	console.log('Server running on: 4000');
});
