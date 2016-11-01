//var r =require('../sendNotificationModule.js');
var Notification = require('./modules/sendNotificationModule.js');
var message = {
  "to": "",
  "data": {
    "hello": "This is my First Message",
   }
};

Notification.sendNotification(message);