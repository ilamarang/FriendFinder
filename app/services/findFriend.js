var dataStore = require('../data/friends.js');

var calculateCompatibility = function(requestedData,storedData,userData) {
var bestCompatibilityScore = 51; //Default Value
var bestCompatiblePerson = {};

storedData.forEach(function(value,index) {

  var currentCompatibilityScore = 0;
  value.scores.forEach(function(value,index){
    currentCompatibilityScore = currentCompatibilityScore + Math.abs(parseInt(value) - parseInt(requestedData[index]));

  });
  console.log('Current Compatibility of ' + value.name +'  ' + currentCompatibilityScore);
  console.log('Best compatibility So far' + '  ' + bestCompatibilityScore);
  if(currentCompatibilityScore < bestCompatibilityScore)
  {
    bestCompatibilityScore = currentCompatibilityScore;
    bestCompatiblePerson = value;
  }
})
dataStore.push(userData);
console.log(dataStore);
return bestCompatiblePerson;
}

module.exports = {

  findFriend : function(req,res) {

    var requestData = req.body.findFriendRequest;

    //Store data in the dataStore
    console.log(req.body);
    var userData = {
      'name':req.body.name,
      'photo':req.body.picAddress,
      'scores': req.body.findFriendRequest
    }

    res.json(calculateCompatibility(requestData,dataStore,userData));

  }

}
