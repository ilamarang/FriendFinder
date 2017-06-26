$(".dropdown-menu li a").click(function () {
    var selText = $(this).text();
    $(this).closest('div').find('button[data-toggle="dropdown"]').html(selText + ' <span class="caret"></span>');
    $(this).closest('.dropdown').removeClass("open");
    return false;
});

$("#citySubmit").on("click", function(event) {

  var status = {"firstName":"John", "lastName":"Doe"}

	   $.post("/api/survey", status)
      .done(function(data) {
        console.log(data);
        alert("Finding Nemo...");
      });


})
