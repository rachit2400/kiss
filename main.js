var id = null;
function fight1() {
  var elem = document.getElementById("rach");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 92) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + '%';
    }
  }
  document.getElementById('fight').style.display = "block";
  document.getElementById('container').style.backgroundColor = "#ff7373";
  document.getElementById('rach').style.opacity = "0.6";
  
}

function fight2() {
  var elem = document.getElementById("yav");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 5);
  function frame() {
    if (pos == 93) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.right = pos + '%';
    }
  }
  document.getElementById('fight').style.display = "block";
  document.getElementById('container').style.backgroundColor = "#ff7373";
  document.getElementById('yav').style.opacity = "0.6";
}