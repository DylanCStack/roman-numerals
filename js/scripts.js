var numerals = ["I","V","X","L","C","D","M"];

var translate = function(num) {
  num.split("");
  var outputStr = "";
  for (var i = 0; i < num.length; i++){
    // always will start with the singles digits and works towards tens, hundreds, thousands
    var temp = getRoman(parseInt(num[num.length-1-i]), i);
    // concat by adding temp (higher place) to the left of the lower places
    outputStr = temp + outputStr;
  }
  return outputStr;
}
var addCheck = function(digit){
  if(digit != 4 && digit !=9){
    return true;

  } else {
    return false;
  }

}

var getRoman = function(input, place) {

var numeral = "";
var numAdded;
var addTo = "";
var subFrom = "";

  switch (addCheck(input)) {
    case true:
      if(place===0){
        numeral = "I";
      } else if(place===1){
        numeral = "X"
      } else if(place===2){
        numeral = "C"
      } else if(place===3){
        numeral = "M"
      }

      numAdded = input;

      if(input >= 5){
        numAdded = input - 5;
        if(place === 0) {
          addTo = "V";
        } else if(place===1){

          addTo="L";
        } else if(place===2){
          addTo="D"
        }
      }
      var R = numeral;
      numeral = addTo;
      for(var i = 0; i < numAdded; i++){

        numeral += R;
      }
      break;

    case false:

      if (place === 0 && input != 9){
        numeral += "IV";
      } else if (place === 0){
        numeral += "IX";
      } else if (place === 1 && input != 9){
        numeral += "XL";
      } else if (place === 1){
        numeral += "XC";
      } else if (place === 2 && input != 9){
        numeral += "CD";
      } else if (place === 2){
        numeral += "CM";
      } else {
        numeral = "number to big";
      }
      break;

    default:
      break;

  }

  return numeral;

};

$(function(){
  $("form").submit(function(event){
    event.preventDefault();
    var input = $("#decimal").val();

    var output = translate(input);
    $("#output").text(output);
  });

});
