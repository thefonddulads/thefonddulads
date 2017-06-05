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
  break; 
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
  break;
  case 'pink':
  title.innerHTML = "Pink Knight";
  info.innerHTML = "<img class='castlepic' src='images/castle/pink.png'> <p class='biotext'>This is the pink knight's bio.</p>";
  break;
  case 'alien':
  title.innerHTML = "Alien";
  info.innerHTML = "<img class='castlepic' src='images/castle/alien.png'> <p class='biotext'>This is the aliens's bio.</p>";
  break;
  case 'barbarian':
  title.innerHTML = "Barbarian";
  info.innerHTML = "<img class='castlepic' src='images/castle/barbarian.png'> <p class='biotext'>This is the barbarian's bio.</p>";
  break;
  case 'bear':
  title.innerHTML = "Bear";
  info.innerHTML = "<img class='castlepic' src='images/castle/bear.png'> <p class='biotext'>This is the bear's bio.</p>";
  break;
  case 'brute':
  title.innerHTML = "Brute";
  info.innerHTML = "<img class='castlepic' src='images/castle/brute.png'> <p class='biotext'>This is the brute's bio.</p>";
  break;
 }
}
