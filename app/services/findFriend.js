module.exports = {

  findFriend : function(req,res) {
    console.log('Hello Friend!');

    console.log('Data obtained' + req.body);
    var status = {"firstName":"John", "lastName":"Doe"}
    res.json(status);
    console.log(status);

  }

}
