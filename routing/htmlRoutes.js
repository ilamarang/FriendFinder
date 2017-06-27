var express = require('express');
var router = express.Router();
var path = require('path');

//Middle ware that is specific to this router
router.use(function timeLog(req, res, next) {
 console.log('Time: ', Date.now());
next();
});


// Define the home page route
router.get('/', function(req, res) {
  res.sendFile('/public/home.html',{'root': '../FriendFinder/'});
  
});

// Define the about route
router.get('/survey', function(req, res) {
  res.sendFile('/public/survey.html',{'root': '../FriendFinder/'});
});


module.exports = router;
