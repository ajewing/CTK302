let timer = 0;
let state = 0;
let img1 ;

function setup() {
createCanvas(800, 800);
imageMode(CENTER);
img1 = loadImage("assets/eye.jpg");
}

function draw() {


  switch (state) {

    case 0:
      background('red');
      text("Hello World", 250, 250);
      // increment the timer variable
      timer = timer + 1;
      //if the timer var is greater than 200
      if (timer > 5 * 60) {
        //make it go to state 1
        state = 1;
        timer = 0;
      }
      break;

    case 1:
background('red') ;
      image(img1, width/2, height/2, 300, 300);
      text("Winning Big", 250, 250);
      break;

  }
}
