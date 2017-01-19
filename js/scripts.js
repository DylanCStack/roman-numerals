var numerals = ["I","V","X","L","C","D","M"];

var translate = function(num) {
  num.split("");
  var outputStr = "";
  for (var i = 0; i < num.length; i++){
    // always will start with the singles digits and works towards tens, hundreds, thousands
    var temp = getRoman(parseInt(num[num.length-1-i]) * Math.pow(10,i));
    // concat by adding temp (higher place) to the left of the lower places
    outputStr = temp + outputStr;
  }
  return outputStr;
}

var getRoman = function(input) {
  switch (input) {
    case 1:
      return "I";
      break;
    case 5:
      return "V";
      break;
    case 10:
      return "X";
      break;
    case 50:
      return "L";
      break;
    case 100:
      return "C";
      break;
    case 500:
      return "D"
      break;
    case 1000:
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



    var output = translate(input);
    $("#output").text(output);
  });

});
