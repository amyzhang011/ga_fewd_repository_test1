alert("Click a Button!");

document.getElementById('stop').onclick = illuminateRed;
document.getElementById('caution').onclick = illuminateYellow;
document.getElementById('go').onclick = illuminateGreen;

function illuminateRed() {
  clearLights();
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



