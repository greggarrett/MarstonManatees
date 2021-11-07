imgInp = document.getElementById("img-input");

var loadFile = function(event) {
    var imgOut = document.getElementById('img-output');
    imgOut.src = URL.createObjectURL(event.target.files[0]);
    imgOut.onload = function() {
      URL.revokeObjectURL(imgOut.src) // free memory
    }
  };

function submit() {
    //When user presses submit, send the image to the server
    
}