var express = require('express');
var apiRouter = express.Router();
var path = require('path');
var friendFinder = require('../app/services/findFriend')

//Middle ware that is specific to this router
apiRouter.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the surey route
apiRouter.post('/api/survey', friendFinder.findFriend);

module.exports = apiRouter;
