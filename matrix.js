// set the canvas to fullscreen
canvas.height = window.screen.height;
canvas.width = window.screen.width;

// one entry in the array per column of text
// each value represent the current y position of the column.
// (canvas 0 is the top of the screen and positive y values move down)
var columns = []
for (var i = 0; i < 256; columns[i++] = 1);

// executed once per frame
function step() {
  // darkens the canvas by drawing an almost black rectangle around the canvas
  // this explains the fade from white to black initially
  canvas.getContext('2d').fillStyle = 'rgba(0, 0, 0, 0.05)';
  canvas.getContext('2d').fillRect(0, 0, canvas.width, canvas.height);

  // green coloring of text. Customize to whatever color you want
  canvas.getContext('2d').fillStyle = '#FFD700';

  // for each column
  columns.map(function (value, index) {
    // check out mdn on fromCharCode -- this is where you can customize the text that waterfalls.
    var character = String.fromCharCode(3e4 + Math.random() * 33);
    // draw the character              text       x           y 
    canvas.getContext('2d').fillText(character, index * 10, value);
    // move down the character 
    // if the character is lower than 758, there is a random chance of it being reset
    columns[index] = value > 758 + Math.random() * 1e4 ? 0 : value + 10;
  })
}

setInterval(step, 33)