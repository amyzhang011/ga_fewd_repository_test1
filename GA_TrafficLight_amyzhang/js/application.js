alert("Click a Button!");

// Great! Using event listeners insteae of inline JavaScript is a great practice!

document.getElementById('stop').onclick = illuminateRed;
document.getElementById('caution').onclick = illuminateYellow;
document.getElementById('go').onclick = illuminateGreen;


function illuminateRed() {
  clearLights(); // Great use of a seperate function.
  document.getElementById('red').style.backgroundColor = "red";
  document.getElementById('red').style.opacity = 1;
  document.getElementById('red').style.boxShadow = "0px 0px 15px 15px red";
}

function illuminateYellow() {
  clearLights();
  document.getElementById('yellow').style.backgroundColor = "yellow";
  document.getElementById('yellow').style.opacity = 1;
  document.getElementById('yellow').style.boxShadow = "0px 0px 15px 15px yellow";
}

function illuminateGreen() {
  clearLights();
  document.getElementById('green').style.backgroundColor = "lime";
  document.getElementById('green').style.opacity = 1;
  document.getElementById('green').style.boxShadow = "0px 0px 15px 15px lime";
}

function clearLights() {
  document.getElementById('red').style.backgroundColor = "red";
  document.getElementById('red').style.opacity = .4;
  document.getElementById('red').style.boxShadow = "none";

  document.getElementById('yellow').style.backgroundColor = "yellow";
  document.getElementById('yellow').style.opacity = .4;
  document.getElementById('yellow').style.boxShadow = "none";

  document.getElementById('green').style.backgroundColor = "lime";
  document.getElementById('green').style.opacity = .4;
  document.getElementById('green').style.boxShadow = "none";
}


// Code is very well written and perfectly functional. Good job!

// It's a little redundant though. We can probably create a "turnLightOn" function to turn on a light based on which button was clicked. Might look like this: 


// document.getElementById('stop').onclick = turnLightOn("red");
// document.getElementById('caution').onclick = turnLightOn("yellow");
// document.getElementById('go').onclick = turnLightOn("green");


// function turnLightOn(color) {
//   turnLightsOff();
//   var whichLight = document.getElementById(color);
//   whichLight.style.backgroundColor = color;
// }

// function turnLightsOff(){
//   var greenLight = document.getElementById('green');
//   var yellowLight = document.getElementById('yellow');
//   var redLight = document.getElementById('red');

//   greenLight.style.backgroundColor = "black";
//   yellowLight.style.backgroundColor = "black";
//   redLight.style.backgroundColor = "black";
// }


// In the case above, the id of the light ("red", for example), is being used for two things. 1) To grab the "red" light, and 2) as a way to tell turnLightOn what color we want to change the light to. 
// If this doesn't make sense, come talk to me before class. It's a smart way to kill two birds with one stone, so to speak, but might be slightly confusing.

// The functions above are flexible, meaning they contain no hard-coded values. Each function  pertains to one repeatable action, and the name of that function tells you it's purpose. Now, if we wanted to build a second traffic light that produces three totally new light colors, all we'd need to do is build the HTML so it fits with function "turnLightOn". Since their are are no hard-coded values inside of our functions they it can be re-used and applied in many different situations. This is always something you want to strive for in your JavaScript code.

