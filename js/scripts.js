var numerals = ["I","V","X","L","C","D","M"];

var translate = function(num) {
  num.split("");
  var outputStr = "";
  for (var i = 0; i < num.length; i++){
    // always will start with the singles digits and works towards tens, hundreds, thousands
    console.log(parseInt(num[num.length-1-i]) + "    i:" + i);
    var temp = getRoman(parseInt(num[num.length-1-i]), i);
    // concat by adding temp (higher place) to the left of the lower places
    outputStr = temp + outputStr;
  }
  return outputStr;
}
var addCheck = function(digit){
  console.log(digit);
  if(digit != 4 && digit !=9 && digit != 5){
    console.log("true");
    return true;

  } else {
    console.log("false");
    return false;
  }

}

var getRoman = function(input, place) {
var numeral;
var numAdded;
var addTo = "";
console.log("before switch");


  switch (addCheck(input)) {
    case true:
      console.log("inside case");
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
      if(input > 5){
        numAdded = input - 5;
        if(place = 0) {
          addTo = "V";
        } else if(place=1){
          addTo="L";
        } else if(place=2){
          addTo="D"
        }

      }

      var R = numeral;
      numeral = addTo;
      console.log("Numeral: " + numeral);
      for(var i = 0; i < numAdded; i++){

        numeral += R;
      }
      console.log("Numeral: " + numeral);

      break;

    //   break;
    // case (1 && place === 1):
    //   numeral= "X";
    //   break;
    // case (1 && place === 2):
    //   numeral= "C";
    //   break;
    // case (1 && place === 3):
    //   numeral= "M";
    //   break;

// case False;
    case false:
      if(input === 5 && place === 0){
        numeral= "V";
      } else if (input === 5 && place === 1){
        numeral= "L";
      } else if (input === 5 && place === 2){
        numeral= "D";
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
