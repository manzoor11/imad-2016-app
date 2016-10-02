// counter code

var button = document.getElementById("counter");
button.onclick = function() {
  
  // creat a request to counter end point
  var request = new XMLHttpRequest();
  
  //capture the response
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
        // take some action 
        if(request.state === 200) {
            var counter = request.responseText;
            var span = document.getElementById("count");
            span.InnerHTML = counter.toString();
        }
    }
     // not done yet
  };
    // make request
    request.open('GET', 'http://manzoor11.imad.hasura-app.io/counter', true);
    request.send(null);
};