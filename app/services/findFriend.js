var dataStore = require('../data/friends.js');

var calculateCompatibility = function(requestedData,storedData) {
var bestCompatibilityScore = 0;
var bestCompatiblePerson = {};

storedData.forEach(function(value,index) {

  var currentCompatibilityScore = 0;
  value.scores.forEach(function(value,index){
    currentCompatibilityScore = currentCompatibilityScore + Math.abs(parseInt(value) - parseInt(requestedData[index]));

  });
  console.log('Current Compatibility of ' + value.name +'  ' + currentCompatibilityScore);
  console.log('Best compatibility So far' + '  ' + bestCompatibilityScore);
  if(currentCompatibilityScore > bestCompatibilityScore)
  {
    bestCompatibilityScore = currentCompatibilityScore;
    bestCompatiblePerson = value;
  }
})
return bestCompatiblePerson;
}

module.exports = {

  findFriend : function(req,res) {

    var requestData = req.body.findFriendRequest;
    var storedData = {'friendList':dataStore.friendsList}
    res.json(calculateCompatibility(requestData,storedData.friendList));

  }

}
