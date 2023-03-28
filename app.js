var api_key = '4cd33de374ea049c0dc7c107c25500aa-30344472-bcaf72f0';
var domain = 'sandbox80350846e52d4a12afb22f49dc96fbf8.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: domain});
 
var data = {
  from: 'Shalu <shalinipandey242000@gmail.com>',
  to: 'shalinipandey000242@gmail.com',
  subject: 'Hello shalini',
  text: 'Testing some Mailgun awesomeness!'
};
 
mailgun.messages().send(data, function (error, body) {
    if (error) {
        console.log(error);
    }
  console.log(body);
});
