'use strict';

var express = require('express'),
	app = express();
var bodyParser = require('body-parser');
var watson = require('watson-developer-cloud');
var rp = require('request-promise');

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

app.get('/api/lyrics', function(req, res) {
    var api_key = '4e667bc5c7980001d48eb3bd5aaac3da'
    var options = {
        uri: 'http://api.musixmatch.com/ws/1.1/track.search',
        qs: {
            apikey: api_key,
            q: req.query.query,
            f_has_lyrics: '1',
            f_lyrics_language: 'en',
            page_size: '10',
            s_track_rating: 'desc'
        },
        headers: {
            'User-Agent': 'Request-Promise'
        },
        json: true // Automatically parses the JSON string in the response
    };

    rp(options).then(function (response) {
        var trackId = response.message.body.track_list[0].track.track_id;

        var options2 = {
                uri: 'http://api.musixmatch.com/ws/1.1/track.lyrics.get',
                qs: {
                    apikey: api_key,
                    track_id: trackId
                },
                headers: {
                    'User-Agent': 'Request-Promise'
                },
                json: true // Automatically parses the JSON string in the response
        };
        return rp(options2);
    }).then(function (response) {
        var lyrics = response.message.body.lyrics.lyrics_body.replace("******* This Lyrics is NOT for Commercial use *******","");
        res.send(lyrics);
        console.log('User has %d repos', repos.length);
    })
    .catch(function (err) {
        // API call failed... yeah no
    });
});


app.listen(port, function() {
	console.log('Server running on: 4000');
});
