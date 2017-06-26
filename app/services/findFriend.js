var dataStore = require('../data/friends.js');

module.exports = {

  findFriend : function(req,res) {
    console.log('Hello Friend!');

    console.log('Data obtained' + req.body);

    var status = {'friendList':dataStore.friendsList}
    res.json(status);
    console.log(status);

  }

}
