'use strict';

// Route the incoming request based on type (LaunchRequest, IntentRequest,
// etc.) The JSON body of the request is provided in the event parameter.
exports.handler = function(event, context) {
    try {
        console.log("event.session.application.applicationId=" + event.session.application.applicationId);

        if (event.session.new) {
            onSessionStarted({ requestId: event.request.requestId }, event.session);
        }

        if (event.request.type === "LaunchRequest") {
            onLaunch(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "IntentRequest") {
            onIntent(event.request,
                event.session,
                function callback(sessionAttributes, speechletResponse) {
                    context.succeed(buildResponse(sessionAttributes, speechletResponse));
                });
        } else if (event.request.type === "SessionEndedRequest") {
            onSessionEnded(event.request, event.session);
            context.succeed();
        }
    } catch (e) {
        context.fail("Exception: " + e);
    }
};

/**
 * Called when the session starts.
 */
function onSessionStarted(sessionStartedRequest, session) {
    console.log("onSessionStarted requestId=" + sessionStartedRequest.requestId + ", sessionId=" + session.sessionId);

    // add any session init logic here
}

/**
 * Called when the user invokes the skill without specifying what they want.
 */
function onLaunch(launchRequest, session, callback) {
    console.log("onLaunch requestId=" + launchRequest.requestId + ", sessionId=" + session.sessionId);

    var cardTitle = "Smarty App"
    var speechOutput = "Hello, What would you like to know about your farm today?"
    callback(session.attributes,
        buildSpeechletResponse(cardTitle, speechOutput, "", true));
}

/**
 * Called when the user specifies an intent for this skill.
 */
function onIntent(intentRequest, session, callback) {
    console.log("onIntent requestId=" + intentRequest.requestId + ", sessionId=" + session.sessionId);

    var intent = intentRequest.intent,
        intentName = intentRequest.intent.name;

    // dispatch custom intents to handlers here
    if (intentName == 'WeatherStatusIntent') {
        handleWSIRequest(intent, session, callback);
    } else if (intentName == 'ControlMotorIntent') {
        handleCMIRequest(intent, session, callback);
    } else {
        throw "Invalid intent";
    }
}

/**
 * Called when the user ends the session.
 * Is not called when the skill returns shouldEndSession=true.
 */
function onSessionEnded(sessionEndedRequest, session) {
    console.log("onSessionEnded requestId=" + sessionEndedRequest.requestId + ", sessionId=" + session.sessionId);

    // Add any cleanup logic here
}

function handleWSIRequest(intent, session, callback) {
    getData(function(speechOutput) {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(speechOutput, "", "true"));
    });
}

function handleCMIRequest(intent, session, callback) {
    var speechOutput = 'Got ';
    var status;
    var motorAction = intent.slots.motorAction.value;
    speechOutput += motorAction;
    if (motorAction === 'turn on') {
        status = 1;
    }

    if (motorAction === 'turn off') {
        status = 0;
    }
    setData(status, function(speechOutput) {
        callback(session.attributes,
            buildSpeechletResponseWithoutCard(speechOutput, "", "true"));
    });

}


function getData(cb) {
    var http = require('http');
    var chunk = '';
    var options = {
        host: 'add7231d.ngrok.io',
        port: 80,
        path: '/api/v1/data/b8:27:eb:39:92:0d/30',
        agent: false,
        timeout: 10000,
        method: 'GET',
        headers: {
            'AlexSkillRequest': true,
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTFmZGI5ZGNlYjBiODM2YjIzMmI3MjMiLCJpYXQiOjE0OTcxNjE4MTUsImV4cCI6MTQ5NzI0ODIxNX0.ua-SXAqLb-XUEtbgY55TX_pKdD2Xj5OSM7b9Iox_Rd8'
        }
    };

    var req = http.request(options, function(res) {
        res.on('data', function(_chunk) {
            chunk += _chunk;
        });

        res.on('end', function() {
            var resp = chunk;
            if (typeof chunk === 'string') {
                resp = JSON.parse(chunk);
            }

            if (resp.length === 0) {
                cb('Looks like we have not gathered any data yet! Please try again later!');
            }

            var d = resp[0].data;

            if (!d) {
                cb('Looks like there is something wrong with the data we got! Please try again later!');
            }

            var temp = d.t || 'invalid';
            var humd = d.h || 'invalid';
            var mois = d.m || 'invalid';
            var rain = d.r || 'invalid';

            cb('The temperature is ' + temp + ' degrees celsius, the humidity is ' + humd + ' percent, The moisture level is ' + mois + ' percent and the rain level is ' + rain + ' percent!');

        });

        res.on('error', function() {
            console.log(arguments);
            cb('Looks like something went wrong.');
        });
    });
    req.end();
}

function setData(status, cb) {
    var http = require('http');
    var chunk = '';
    var data = {
        'status': status,
        'macAddress': 'b8:27:eb:39:92:0d'
    };

    data = JSON.stringify(data);

    var options = {
        host: 'add7231d.ngrok.io',
        port: 80,
        path: '/api/v1/data',
        agent: false,
        timeout: 10000,
        method: 'POST',
        headers: {
            'AlexSkillRequest': true,
            'Content-Type': 'application/json',
            'Content-Length': Buffer.byteLength(data),
            'authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTFmZGI5ZGNlYjBiODM2YjIzMmI3MjMiLCJpYXQiOjE0OTcxNjE4MTUsImV4cCI6MTQ5NzI0ODIxNX0.ua-SXAqLb-XUEtbgY55TX_pKdD2Xj5OSM7b9Iox_Rd8'
        }
    };

    var req = http.request(options, function(res) {
        res.on('data', function(_chunk) {
            chunk += _chunk;
        });

        res.on('end', function() {
            var resp = chunk;
            if (typeof chunk === 'string') {
                resp = JSON.parse(chunk);
            }

            cb('Motor has been successfully ' + (status ? 'turned on' : 'turned off'));

        });

        res.on('error', function() {
            console.log(arguments);
            cb('Looks like something went wrong.');
        });
    });

    // post the data
    req.write(data);
    req.end();
}


// ------- Helper functions to build responses -------

function buildSpeechletResponse(title, output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        card: {
            type: "Simple",
            title: title,
            content: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildSpeechletResponseWithoutCard(output, repromptText, shouldEndSession) {
    return {
        outputSpeech: {
            type: "PlainText",
            text: output
        },
        reprompt: {
            outputSpeech: {
                type: "PlainText",
                text: repromptText
            }
        },
        shouldEndSession: shouldEndSession
    };
}

function buildResponse(sessionAttributes, speechletResponse) {
    return {
        version: "1.0",
        sessionAttributes: sessionAttributes,
        response: speechletResponse
    };
}
