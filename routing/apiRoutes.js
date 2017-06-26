var express = require('express');
var apiRouter = express.Router();
var path = require('path');

//Middle ware that is specific to this router
apiRouter.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});


// Define the about route
apiRouter.post('/api/survey', function(req, res) {
  console.log('Data obtained' + req.body);
  var status = {"firstName":"John", "lastName":"Doe"}
  res.json(status);
  console.log(status);
});


module.exports = apiRouter;
