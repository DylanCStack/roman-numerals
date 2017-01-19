$(function(){

  $("form").submit(function(event){
    event.preventDefault();
    console.log("button clicked");
    var input = $("#decimal").val();


    var output = "Romans go home!";
    $("#output").text(output);
  });

});
