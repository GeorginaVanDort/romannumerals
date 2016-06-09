debugger;
$(document).ready(function(){
  $("form#number").submit(function(event){
   event.preventDefault();
    var userInput = parseInt($("#arabic").val());
    // var output = rnumerals(userInput);
    //var result = rnumerals($("#arabic").val());
  $("#result").text(output);
// front end logic

var result = []
var number1 = ["I","II","III","IV","V","VI","VII","VIII","IX"]
var number2 = ["X","XX","XXX","LXXI","L","LX","LXX","LXXX","XC"]

var result = number1[userInput-1];


var result2 = number2[userInput-1];


var userInput = $("#arabic").val();
var nums = [];
for (var i = 0; i < userInput.length; i++) {
    nums.push(parseInt(userInput.charAt(i)));
}


  var result10 = number2[userInput-1];
  var result1 = number1[userInput-1];
