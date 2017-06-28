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
  //res.sendFile('/public/home.html',{'root': '../FriendFinder/'});
res.render('pages/home');
});

// Define the about route


router.post('/survey', function(req, res) {
  console.log(req.body.name);
  //res.sendFile('/public/survey.html',{'root': '../FriendFinder/'});
  res.render('pages/survey',{
    name: req.body.username,
    picAddress: req.body.picAddress
  })
});

module.exports = router;
