// counter code

var button = document.getElementById("counter");
var counter = 0;
button.onclick = function() {
  
  // make a request to counter end point
  
  //capture the response
  
  //render the variable
  counter = counter + 2;
  var span = document.getElementById("count");
  span.InnerHTML = counter.toString();
};