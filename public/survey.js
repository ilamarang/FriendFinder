

$("#findFriendSubmit").on("click", function(event) {

var requestData = [];
var findFriendData = {
	"findFriendRequest":requestData
}

for(var questionCounter = 0;questionCounter < 10;questionCounter++)

{

	var counter = questionCounter + 1;
	$('#myModalLabel').text('Your best Game of Throne Compatible Friend!');
	if($('#dropdownMenu' + counter).val()=== '')
	{
		$('#myModalLabel').text('Please enter all the fields');
		$('#imagepreview').attr('src', 'https://media.giphy.com/media/m6tmCnGCNvTby/giphy.gif');	
		$('#imagemodal').modal('show');
		return;
	}
	
	if( $('#dropdownMenu' + counter).val() === '1 (Strongly Disagree)') {
		requestData[questionCounter] = '1';
	} else  if($('#dropdownMenu' + counter).val()==='5 (Strongly Agree)')  {
		requestData[questionCounter] = '5';
	} else {
		requestData[questionCounter] = $('#dropdownMenu' + counter).val();
	}
	
	
	console.log(requestData[questionCounter]);
}

	   $.post("/api/survey", findFriendData)
      .done(function(data) {
        var friendsArray = data;
              
               console.log(data);
        $('#imagepreview').attr('src', data.photo);
        $('#imagemodal').modal('show');

      }) 

  });

$( document ).ready(function() {

	var myOptions = {
    option1 : '1 (Strongly Disagree)',
    option2 : '2',
    option3 : '3',
    option4 : '4',
    option5 : '5 (Strongly Agree)',
};

var mySelect = $('.dropdown-menu');
$.each(myOptions, function(val, text) {
	console.log('<li><a href="#" data-value="' + text + '" ' +text+' </a> </li>');
    mySelect.append($('<li><a href="#" data-value="' + text + '"> ' +text+' </a> </li>'));
});


$(".dropdown-menu li a").click(function () {
$(this).parents(".dropdown").find('.btn').html($(this).text() + ' <span class="caret"></span>');
  $(this).parents(".dropdown").find('.btn').val($(this).data('value'));
  
});


$("#fetchSurvey").on("click", function(e) {
	var userProfileData = {
"name": "",
"email":"",
"photo": "",
"scores": []
}

userProfileData.name = $("#username").val();
userProfileData.photo = $("#picAddress").val();

if(userProfileData.name=== '' || userProfileData.photo==='') {
	e.preventDefault()
} else
{
	console.log('User Input validated');
}


})


});

