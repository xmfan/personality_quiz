'use strict';

var express = require('express'),
	app = express(),
    bodyParser = require('body-parser'),
    watson = require('watson-developer-cloud'),
    rp = require('request-promise'),
    util = require('util'),
    extend = util._extend,
    request = require('request'),
    async = require('async');

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
    /*
    personality_insights.profile({ text: my_profile }, function (err, profile) {
        if (err) {
            console.log(err);
        } else {

            //res.send(profile);
            res.send('lamo');
        }
    });
    */
    var sample = {
      "id": "*UNKNOWN*",
      "source": "*UNKNOWN*",
      "word_count": 142,
      "word_count_message": "There were 142 words in the input. We need a minimum of 3,500, preferably 6,000 or more, to compute statistically significant estimates",
      "processed_lang": "en",
      "tree": {
        "id": "r",
        "name": "root",
        "children": [
          {
            "id": "personality",
            "name": "Big 5",
            "children": [
              {
                "id": "Extraversion_parent",
                "name": "Extraversion",
                "category": "personality",
                "percentage": 0.06739366784392181,
                "children": [
                  {
                    "id": "Openness",
                    "name": "Openness",
                    "category": "personality",
                    "percentage": 0.7051861397046635,
                    "sampling_error": 0.0653032944,
                    "children": [
                      {
                        "id": "Adventurousness",
                        "name": "Adventurousness",
                        "category": "personality",
                        "percentage": 0.24273567659303674,
                        "sampling_error": 0.054508355599999996
                      },
                      {
                        "id": "Artistic interests",
                        "name": "Artistic interests",
                        "category": "personality",
                        "percentage": 0.10432906571631047,
                        "sampling_error": 0.1105694696
                      },
                      {
                        "id": "Emotionality",
                        "name": "Emotionality",
                        "category": "personality",
                        "percentage": 0.8132992201380651,
                        "sampling_error": 0.0511414066
                      },
                      {
                        "id": "Imagination",
                        "name": "Imagination",
                        "category": "personality",
                        "percentage": 0.3616148561276863,
                        "sampling_error": 0.0687314696
                      },
                      {
                        "id": "Intellect",
                        "name": "Intellect",
                        "category": "personality",
                        "percentage": 0.5009869824564314,
                        "sampling_error": 0.0604259074
                      },
                      {
                        "id": "Liberalism",
                        "name": "Authority-challenging",
                        "category": "personality",
                        "percentage": 0.9440958312234305,
                        "sampling_error": 0.08844844119999999
                      }
                    ]
                  },
                  {
                    "id": "Conscientiousness",
                    "name": "Conscientiousness",
                    "category": "personality",
                    "percentage": 0.7509619654135328,
                    "sampling_error": 0.0815783018,
                    "children": [
                      {
                        "id": "Achievement striving",
                        "name": "Achievement striving",
                        "category": "personality",
                        "percentage": 0.47503219156488846,
                        "sampling_error": 0.1047757272
                      },
                      {
                        "id": "Cautiousness",
                        "name": "Cautiousness",
                        "category": "personality",
                        "percentage": 0.6962411095195772,
                        "sampling_error": 0.0969161446
                      },
                      {
                        "id": "Dutifulness",
                        "name": "Dutifulness",
                        "category": "personality",
                        "percentage": 0.45384312564939416,
                        "sampling_error": 0.066068398
                      },
                      {
                        "id": "Orderliness",
                        "name": "Orderliness",
                        "category": "personality",
                        "percentage": 1,
                        "sampling_error": 0.0745509562
                      },
                      {
                        "id": "Self-discipline",
                        "name": "Self-discipline",
                        "category": "personality",
                        "percentage": 0.6206377869026388,
                        "sampling_error": 0.0501648544
                      },
                      {
                        "id": "Self-efficacy",
                        "name": "Self-efficacy",
                        "category": "personality",
                        "percentage": 0.7855118958460193,
                        "sampling_error": 0.09784636840000001
                      }
                    ]
                  },
                  {
                    "id": "Extraversion",
                    "name": "Extraversion",
                    "category": "personality",
                    "percentage": 0.06739366784392181,
                    "sampling_error": 0.0610899574,
                    "children": [
                      {
                        "id": "Activity level",
                        "name": "Activity level",
                        "category": "personality",
                        "percentage": 0.1320657267324044,
                        "sampling_error": 0.0831364296
                      },
                      {
                        "id": "Assertiveness",
                        "name": "Assertiveness",
                        "category": "personality",
                        "percentage": 0.13130439422727444,
                        "sampling_error": 0.08850146580000001
                      },
                      {
                        "id": "Cheerfulness",
                        "name": "Cheerfulness",
                        "category": "personality",
                        "percentage": 0.08993348833481232,
                        "sampling_error": 0.11119159220000001
                      },
                      {
                        "id": "Excitement-seeking",
                        "name": "Excitement-seeking",
                        "category": "personality",
                        "percentage": 0.06189801628466359,
                        "sampling_error": 0.08486297720000001
                      },
                      {
                        "id": "Friendliness",
                        "name": "Outgoing",
                        "category": "personality",
                        "percentage": 0.02158290045258255,
                        "sampling_error": 0.0799469824
                      },
                      {
                        "id": "Gregariousness",
                        "name": "Gregariousness",
                        "category": "personality",
                        "percentage": 0.009211874520246268,
                        "sampling_error": 0.0612727814
                      }
                    ]
                  },
                  {
                    "id": "Agreeableness",
                    "name": "Agreeableness",
                    "category": "personality",
                    "percentage": 0.16614363537300292,
                    "sampling_error": 0.10193945,
                    "children": [
                      {
                        "id": "Altruism",
                        "name": "Altruism",
                        "category": "personality",
                        "percentage": 0.09338041151739279,
                        "sampling_error": 0.0754516306
                      },
                      {
                        "id": "Cooperation",
                        "name": "Cooperation",
                        "category": "personality",
                        "percentage": 0.6156317000117122,
                        "sampling_error": 0.0840564614
                      },
                      {
                        "id": "Modesty",
                        "name": "Modesty",
                        "category": "personality",
                        "percentage": 0.08280068048565797,
                        "sampling_error": 0.0603121934
                      },
                      {
                        "id": "Morality",
                        "name": "Uncompromising",
                        "category": "personality",
                        "percentage": 0.5057874217859515,
                        "sampling_error": 0.067044696
                      },
                      {
                        "id": "Sympathy",
                        "name": "Sympathy",
                        "category": "personality",
                        "percentage": 0.9667826769405432,
                        "sampling_error": 0.1032267996
                      },
                      {
                        "id": "Trust",
                        "name": "Trust",
                        "category": "personality",
                        "percentage": 0.14365655969774646,
                        "sampling_error": 0.0615205956
                      }
                    ]
                  },
                  {
                    "id": "Neuroticism",
                    "name": "Emotional range",
                    "category": "personality",
                    "percentage": 0.8900934212705963,
                    "sampling_error": 0.09652001299999999,
                    "children": [
                      {
                        "id": "Anger",
                        "name": "Fiery",
                        "category": "personality",
                        "percentage": 0.7763385243499553,
                        "sampling_error": 0.0993531718
                      },
                      {
                        "id": "Anxiety",
                        "name": "Prone to worry",
                        "category": "personality",
                        "percentage": 0.7761378863706874,
                        "sampling_error": 0.059064681200000003
                      },
                      {
                        "id": "Depression",
                        "name": "Melancholy",
                        "category": "personality",
                        "percentage": 0.33827105688535825,
                        "sampling_error": 0.0633628384
                      },
                      {
                        "id": "Immoderation",
                        "name": "Immoderation",
                        "category": "personality",
                        "percentage": 0.6815723142187142,
                        "sampling_error": 0.057044794
                      },
                      {
                        "id": "Self-consciousness",
                        "name": "Self-consciousness",
                        "category": "personality",
                        "percentage": 0.8580216044727754,
                        "sampling_error": 0.061179929800000005
                      },
                      {
                        "id": "Vulnerability",
                        "name": "Susceptible to stress",
                        "category": "personality",
                        "percentage": 0.941266993614812,
                        "sampling_error": 0.090874675
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "id": "needs",
            "name": "Needs",
            "children": [
              {
                "id": "Self-expression_parent",
                "name": "Self-expression",
                "category": "needs",
                "percentage": 0.007484747858497035,
                "children": [
                  {
                    "id": "Challenge",
                    "name": "Challenge",
                    "category": "needs",
                    "percentage": 0.2371154709396366,
                    "sampling_error": 0.087784926
                  },
                  {
                    "id": "Closeness",
                    "name": "Closeness",
                    "category": "needs",
                    "percentage": 0.05317178584318438,
                    "sampling_error": 0.0866021168
                  },
                  {
                    "id": "Curiosity",
                    "name": "Curiosity",
                    "category": "needs",
                    "percentage": 0.06903749213008602,
                    "sampling_error": 0.1251023292
                  },
                  {
                    "id": "Excitement",
                    "name": "Excitement",
                    "category": "needs",
                    "percentage": 0.028587868575960906,
                    "sampling_error": 0.1143929704
                  },
                  {
                    "id": "Harmony",
                    "name": "Harmony",
                    "category": "needs",
                    "percentage": 0.766667917114679,
                    "sampling_error": 0.114680861
                  },
                  {
                    "id": "Ideal",
                    "name": "Ideal",
                    "category": "needs",
                    "percentage": 0.0385002176966444,
                    "sampling_error": 0.1039405576
                  },
                  {
                    "id": "Liberty",
                    "name": "Liberty",
                    "category": "needs",
                    "percentage": 0.15119715082429983,
                    "sampling_error": 0.1510055532
                  },
                  {
                    "id": "Love",
                    "name": "Love",
                    "category": "needs",
                    "percentage": 0.35957639836676336,
                    "sampling_error": 0.1054972456
                  },
                  {
                    "id": "Practicality",
                    "name": "Practicality",
                    "category": "needs",
                    "percentage": 0.5357185381465676,
                    "sampling_error": 0.0918414682
                  },
                  {
                    "id": "Self-expression",
                    "name": "Self-expression",
                    "category": "needs",
                    "percentage": 0.007484747858497035,
                    "sampling_error": 0.0853109926
                  },
                  {
                    "id": "Stability",
                    "name": "Stability",
                    "category": "needs",
                    "percentage": 0.022806632023977962,
                    "sampling_error": 0.1115643634
                  },
                  {
                    "id": "Structure",
                    "name": "Structure",
                    "category": "needs",
                    "percentage": 0.00982823875359894,
                    "sampling_error": 0.0838920682
                  }
                ]
              }
            ]
          },
          {
            "id": "values",
            "name": "Values",
            "children": [
              {
                "id": "Hedonism_parent",
                "name": "Hedonism",
                "category": "values",
                "percentage": 0.9744291651859416,
                "children": [
                  {
                    "id": "Conservation",
                    "name": "Conservation",
                    "category": "values",
                    "percentage": 0.0596056600669576,
                    "sampling_error": 0.0712865342
                  },
                  {
                    "id": "Openness to change",
                    "name": "Openness to change",
                    "category": "values",
                    "percentage": 0.8359604610465453,
                    "sampling_error": 0.06873593
                  },
                  {
                    "id": "Hedonism",
                    "name": "Hedonism",
                    "category": "values",
                    "percentage": 0.9744291651859416,
                    "sampling_error": 0.1428667446
                  },
                  {
                    "id": "Self-enhancement",
                    "name": "Self-enhancement",
                    "category": "values",
                    "percentage": 0.4038628866818849,
                    "sampling_error": 0.1086705544
                  },
                  {
                    "id": "Self-transcendence",
                    "name": "Self-transcendence",
                    "category": "values",
                    "percentage": 0.636047477500914,
                    "sampling_error": 0.086691064
                  }
                ]
              }
            ]
          }
        ]
      }
    };
    var data = sample["tree"]["children"],
        response = {
            'Big 5': [],
            Needs: [],
            Values: [],
            stats: []
        };


    for (var i=0; i<data.length; i++) {
        var e = data[i];
        var name = e.name;

        var subname = data[i].children[0].name;
        response[name].push(dictionary[name][subname]);

        console.log(data[i].children[0].children);
    }

    res.send(response);
});

/*app.post('/api/getProfile', function(req, res) {
    var postData = {
        include_raw: true,
        text: req.body.text
    },
    url = 'http://localhost:3000/api/profile/text';

    request.post({url: url, form: postData}, function(err, response, html) {
        console.log(html);
    });
});*/

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

var dictionary = {
  'Big 5': {
    'Openness': 'Openness to experience. Higher: Intellectually curious, emotionally-aware, sensitive to beauty and willing to try new things.\nLower: Preferring the plain, straightforward, and obvious over the complex, ambiguous, and subtle.',
    'Conscientiousness': 'Higher: More self-disciplined, dutiful, or aiming for achievement against measures or outside expectations.\nLower: More likely to prefer the spontaneous over the planned.',
    'Extraversion': 'Higher: More energetic and pronounced engagement with the external world. Likes high group visibility, talking, and asserting themselves.\nLower: Needs less stimulation and are more independent of their social world. It does not mean they are shy, un-friendly, or antisocial.',
    'Agreeableness': 'Higher: Value getting along with others. They have a more optimistic view of human nature.\nLower: Value self interests over others. They are more skeptical of others\' motives.',
    'Emotional range': '**This demo cannot diagnose a mental illness.** Higher: More likely to have negative emotions or get upset. It could mean they are going through a tough time.\nLower: More calm and less likely to get upset. It does not mean they are positive, or happy people.',
    'Adventurousness': 'Eagerness to trying new activities and experiencing new things.',
    'Artistic interests': 'Appreciation for art and beauty, both man-made and in nature.',
    'Emotionality': 'Emotional availability; awareness of own feelings.',
    'Imagination': 'Openness to creating an inner world of fantasy.',
    'Intellect': 'Intellectual curiosity; openness to new ideas.',
    'Authority-challenging': 'Openness to re-examine own values and traditions; readiness to challenge authority.',
    'Achievement-striving': 'The need for personal achievement and sense of direction.',
    'Cautiousness': 'Tendency to think things through before acting or speaking.',
    'Dutifulness': 'Sense of duty; amount of emphasis placed on fulfilling obligations.',
    'Orderliness': 'Personal organization, tidiness, neatness.',
    'Self-discipline': 'Will-power; the capacity to begin tasks and follow through to completion in spite of boredom or distractions.',
    'Self-efficacy': 'Belief in one\'s own competence.',
    'Activity level': 'Pace of living; level of busyness.',
    'Assertiveness': 'Forcefulness of expression; pursuit of leadership and social ascendancy; desire to direct the activities of others.',
    'Cheerfulness': 'Tendency to experience or express positive emotions.',
    'Excitement-seeking': 'A need for environmental stimulation.',
    'Outgoing': 'Interest in and friendliness towards others; socially confident.',
    'Gregariousness': 'Fondness for the company of others; sociability.',
    'Altruism': 'Active and genuine concern for the welfare of others.',
    'Cooperation': 'Dislike of confrontations. Responding to interpersonal conflict with a willingness to compromise.',
    'Modesty': 'Tendency to be unassuming and play down own achievements; humility.',
    'Uncompromising': 'Frank and genuine in expression; candid, blunt.',
    'Sympathy': 'Attitude of compassion for others; kindness.',
    'Trust': 'Level of belief in the sincerity and good intentions of others.',
    'Fiery': 'Tendency to experience–but not necessarily express–anger or frustration.',
    'Prone to worry': 'Tendency to dwell on difficulty or troubles; easily experience unease or concern.',
    'Melancholy': 'Normal tendency to experience feelings of guilt, sadness, hopelessness, or loneliness. **This demo cannot diagnose a mental illness.**',
    'Immoderation': 'Tendency to act on cravings and urges rather over resisting them or delaying gratification.',
    'Self-consciousness': 'Concern with rejection, embarrassment; shyness.',
    'Susceptible to stress': 'Difficulty in coping with stress or pressure in difficult situations.'
  },
  Needs: {
    'Structure': 'A need for organization, planning, and things that have a clear purpose.',
    'Stability': 'A need for the sensible, tried and tested, with a good track record and a known history.',
    'Self-expression': 'A desire to discover and assert one\'s identity.',
    'Practicality': 'A desire for getting the job done, skill, and efficiency.',
    'Love': 'Social contact, whether one-to-one or one-to-many.',
    'Liberty': 'A need to escape, a desire for new experiences, new things.',
    'Ideal': 'A desire to satisfy one\'s idea of perfection in a lifestyle or experience, oftentimes seen as pursuing a sense of community.',
    'Harmony': 'A need to appreciate or please other people, their viewpoints, and feelings.',
    'Excitement': 'A need to pursue experiences or lead a lifestyle that arouses enthusiasm and eagerness.',
    'Curiosity': 'A need to pursue experiences that foster learning, exploration, and growth.',
    'Closeness': 'A need to nurture or be nurtured; a feeling of belonging.',
    'Challenge': 'A desire to achieve, succeed, compete, or pursue experiences that test one\'s abilities.'
  },
  Values: {
    'Conservation': 'Respect, commitment, and acceptance of the customs and ideas that one\'s culture and/or religion provides.',
    'Openness to change': 'Excitement, novelty, and challenge in life.',
    'Hedonism': 'Pleasure or sensuous gratification for oneself.',
    'Self-enhancement': 'Personal success through demonstrating competence according to social standards.',
    'Self-transcendence': 'Preserving and enhancing the welfare of those with whom one is in frequent personal contact.'
  }
};