

var sendNotification = function(data) {
  var fcmServerKey =""; 
  /*Firebase Cloud Messaging Server Key
    You will find the key in Project Setting under Cloud Messaging
  */
  var headers = {
    "Content-Type": "application/json",
    "Authorization": "key="+fcmServerKey
  };
  
  var options = {
    host: "fcm.googleapis.com",
    port: 443,
    path: "/fcm/send",
    method: "POST",
    headers: headers
  };
  
  var https = require('https');
  var req = https.request(options, function(res) {  
    res.on('data', function(data) {
      console.log("Response:");
      console.log(JSON.parse(data));
    });
  });
  
  req.on('error', function(e) {
    console.log("ERROR:");
    console.log(e);
  });
  req.write(JSON.stringify(data));
  req.end();
};

module.exports.sendNotification = sendNotification;
/*
var message = {
  "to": "com.example.lenovo.know8",
  "data": {
    "hello": "This is a Firebase Cloud Messaging Device Group Message!",
   }
};

sendNotification(message);
*/