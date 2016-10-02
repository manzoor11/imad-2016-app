// counter code

var button = document.getElementById("counter");
button.onclick = function() {
  
  // creat a request to counter end point
  var request = new XMLHttpRequest();
  
  //capture the response
  request.onreadystatechange = function () {
    if(request.readyState === XMLHttpRequest.DONE) {
        // take some action 
        if(request.status === 200) {
            var counter = request.responseText;
            var span = document.getElementById('count');
            span.innerHTML = counter.toString();
        }
    }
     // not done yet
  };
    // make request
    request.open('GET', 'http://manzoor11.imad.hasura-app.io/counter', true);
    request.send(null);
};

//submit Name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit = document.getelementById('submit_btn');
submit.onclick = function() {
  // make a request to server
  
  //capture a list of names and render it as a list
  var names = ['name1', 'name2', 'name3', 'name4'];
  var list = '';
  for (var i=0;i<names.length;i++) {
      list += '<li>' + names[i] + '</li>';
  }
  var ul = document.getElementById('namelist');
  ul.innerHtml = list;
};