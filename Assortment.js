var btn = document.getElementById("myButton");

var intervalID = setInterval(function() {
 if (btn.style.width === "70%") {
    btn.style.width = "72%";
  } else {
    btn.style.width = "70%";
  } 

  if (btn.style.height === "150px") {
    btn.style.height = "160px";
  } else {
    btn.style.height = "150px";
  }
}, 600); 
