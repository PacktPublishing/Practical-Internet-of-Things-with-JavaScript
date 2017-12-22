var Rules = require('./rules.json');

exports.processData = function(data) {

    for (var i = 0; i < Rules.length; i++) {
        if (Rules[i].device === data.macAddress) {
            // the rule belows to the incoming device's data
            for (var j = 0; j < Rules[i].rules.length; j++) {
                // process one rule at a time
                var rule = Rules[i].rules[j];
                var data = data.data.acclVals;
                if (checkRuleAndData(rule, data)) {
                    console.log('Rule Matched', 'Processing Then.');
                    if (rule.then.action === 'EMAIL') {
                        console.log('Sending email to', rule.then.to);
                        EMAIL(rule.then.to);
                    } else {
                        console.log('Unknown Then! Please re-check the rules');
                    }
                } else {
                    console.log('Rule Did Not Matched', rule, data);
                }
            }
        }
    }
}

/*   Rule process Helper  */
function checkRuleAndData(rule, data) {
    var rule = rule.if;
    if (rule.cond === 'lt') {
        return rule.valu < data[rule['prop']];
    } else if (rule.cond === 'lte') {
        return rule.valu <= data[rule['prop']];
    } else if (rule.cond === 'eq') {
        return rule.valu === data[rule['prop']];
    } else if (rule.cond === 'gte') {
        return rule.valu >= data[rule['prop']];
    } else if (rule.cond === 'gt') {
        return rule.valu > data[rule['prop']];
    } else if (rule.cond === 'ne') {
        return rule.valu !== data[rule['prop']];
    } else {
        return false;
    }
}


/*Then Helpers*/
function SMS() {
    /// AN EXAMPLE TO SHOW OTHER THENs
}

function CALL() {
    /// AN EXAMPLE TO SHOW OTHER THENs
}

function PUSHNOTIFICATION() {
    /// AN EXAMPLE TO SHOW OTHER THENs
}

function EMAIL(to) {
    /// AN EXAMPLE TO SHOW OTHER THENs
    var email = require('emailjs');
    var server = email.server.connect({
        user: 'arvind.ravulavaru@gmail.com',
        password: 'XXXXXXXXXX',
        host: 'smtp.gmail.com',
        ssl: true
    });

    server.send({
        text: 'Fall has been detected. Please attend to the patient',
        from: 'Patient Bot <arvind.ravulavaru@gmail.com>',
        to: to,
        subject: 'Fall Alert!!'
    }, function(err, message) {
        if (err) {
            console.log('Message sending failed!', err);
        }
    });
}