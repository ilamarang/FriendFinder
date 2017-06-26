$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    $(this).closest('div').find('button[data-toggle="dropdown"]').html(selText + ' <span class="caret"></span>');
    $(this).closest('.dropdown').removeClass("open");
    return false;
});

$("#citySubmit").on("click", function(event) {
	console.log(postData);
	var postData = new Array(2);
	postData[0] = $('.q1').text();
	postData[1] = $('.q2').text();
	
  var status = {"firstName":"John", "lastName":"Doe"}

	   $.post("/api/survey", status)
      .done(function(data) {
        var friendsArray = data.friendList;
        console.log(friendsArray);

        friendsArray.forEach(function(value,index){
        	console.log(value.email);
        })
        alert("Finding Nemo...");
      })

  });
