$("form#number").submit(function(event){
    event.preventDefault();
    var userInput = $("#arabic").val();
    var output = rnumerals(userInput);
    $("p").text(output);
  });
});
// front end logic

var rnumerals = function(){
var numbers = [1, 2, 3]
// for (var i = 0; i < numbers.length; i++) {
  if (userInput === "1"){
    var result = "i";
  } else if (userInput === "2") {
    var result = "ii";
  } else if (userInput === "3") {
    var result = "iii";
  }
}
