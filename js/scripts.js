var numerals = ["I","V","X","L","C","D","M"];

var getRoman = function(input) {
  switch (input) {
    case "1":
      return "I";
      break;
    case "5":
      return "V";
      break;
    case "10":
      return "X";
      break;
    case "50":
      return "L";
      break;
    case "100":
      return "C";
      break;
    case "500":
      return "D"
      break;
    case "1000":
      return "M";
      break;

    default:
      break;

  }


};


$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#decimal").val();



    var output = getRoman(input);
    $("#output").text(output);
  });

});
