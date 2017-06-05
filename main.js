// JavaScript file!
function tier(){
var k = document.getElementById('in').value;
var title = document.getElementById('char');
var info = document.getElementById('info');
if (k == "char") {
title.innerHTML = "Select a character!";
info.innerHTML = " ";
}
else if(k == "red") {
title.innerHTML = "Red Knight";
info.innerHTML = "<img class='castlepic' src='images/castle/red.png'>  <p class='biotext'>This is the red knight's bio.</p>";
}
else if (k == "blue") {
title.innerHTML = "Blue Knight";
info.innerHTML = "<img class='castlepic' src='images/castle/blue.png'> <p class='biotext'>This is the blue knight's bio.</p>"
}
}
