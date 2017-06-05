// JavaScript file!
function tier(){
var k = document.getElementById('in').value;
var title = document.getElementById('char');
var info = document.getElementById('info');

switch(k) {
  case 'char':
  title.innerHTML = "Select a character!";
  info.innerHTML = " ";
  break;
  case 'red':
  title.innerHTML = "Red Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/red.png'>  <p class='biotext'>This is the red knight's bio.</p>";
  break;
  case 'blue':
  title.innerHTML = "Blue Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/blue.png'> <p class='biotext'>This is the blue knight's bio.</p>";
  break;
  case 'green':
  title.innerHTML = "Green Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/green.png'> <p class='biotext'>This is the green knight's bio.</p>";
  case 'orange':
  title.innerHTML = "Orange Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/orange.png'> <p class='biotext'>This is the orange knight's bio.</p>";
  break;
  case 'gray':
  title.innerHTML = "Gray Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/gray.png'> <p class='biotext'>This is the gray knight's bio.</p>";
  break;
  case 'opengray':
  title.innerHTML = "Open Face Gray Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/opengray.png'> <p class='biotext'>This is the open face gray knight's bio.</p>";
  break;
  case 'blacksmith':
  title.innerHTML = "Blacksmith";
  info.innerHTML = "<img class='castlepic' src='images/castle/blacksmith.png'> <p class='biotext'>This is the blacksmith's bio.</p>";
}
}
