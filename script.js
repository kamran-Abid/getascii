function checkASCII(event){
    document.getElementById("keyInput").value = "";
    let value= event.which;
    document.getElementById("asciiValue").innerHTML = value;
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Shift') {
      console.log('Shift key pressed');
      console.log('ASCII value:', event.keyCode || event.which);
    }
    let value= event.which;
    document.getElementById("keyAscii").innerHTML = value;
  });