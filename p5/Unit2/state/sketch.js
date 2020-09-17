let state = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {


  switch (state) {
    case 0:
      background('red');
      text("state0", 250, 250);
      break;

    case 1:
      background('green');
      text("state 1", 250, 250);
      break;

    case 2:
      background('blue');
      text("state 2", 250, 250);
      break;

    case 3:
      background('white');
      text("state3", 250, 250);
  }
}

function mouseReleased() {
  state++ ;
  if (state > 3) {
    state = 0;
  }
}
