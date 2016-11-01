//var r =require('../sendNotificationModule.js');
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router




// more routes for our API will happen here
router.get('/', function(req, res){

var Notification = require('./modules/sendNotificationModule.js');
var message = {
  "to": "",
  "data": {
    "hello": "This is my First Message",
   }
};

Notification.sendNotification(message);
	res.json({message: 'Post is working '+res});
})
// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);