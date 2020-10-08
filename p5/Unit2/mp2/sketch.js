let myState = 0;
var x = 0;
let img1, img2, img3, img4;
let song1;

function preload() {
  song1 = loadSound("assets/TopOff.mp4");

}

function setup() {
  createCanvas(800, 800);
  imageMode(CENTER);
  textSize(32);
  img1 = loadImage("assets/firefist.png");
  img2 = loadImage("assets/fireblast.png");
  img3 = loadImage("assets/firepit.png");
  img4 = loadImage("assets/firejump.png");
}

function draw() {
  background('red');
  switch (myState) {

    case 0:
fill('blue')
      image(img1, width / 2, height / 2, 600, 800);
      text("Click to Begin", x, 250);
      x += 5;

      if (x > width) {
        x = 0;
      }
      break;

    case 1:
fill('white')

      // put a picture here

      image(img2, width / 2, height / 2, 600, 800);
      text("HOOOOOT", 500, 100);
      break;

    case 2:

      // put a picture here
fill('white')
      image(img3, width / 2, height / 2, 600, 800);
      text("FUEGO", 450, 100);
      break;

case 3:
song1.play() ;
myState = 4 ;
break ;

      case 4:
fill('white')
  image(img2, width / 2, height / 2, 600, 800);
        // put a picture here
        image(img4, width / 2, height / 2 + random(200), 600, 800);
        text("Jumping Fire", 450, 100);
        break;
  }
  fill('brown');
  rect(10, 10, 50, 25);
}

function mouseReleased() {

  if ((mouseX > 10) && (mouseX < 60) && (mouseY > 10) && (mouseY < 35)) {
    myState++;
    if (myState > 4) {
      myState = 0;
      song1.pause() ;

    }
  }
}


//freeze code 8:30 a.m 10/07/20
