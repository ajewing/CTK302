var x = 0 ;
var velocity = 0 ;
var mic;
var vol;
var c = 'green';

function setup() {
  createCanvas(400, 400);
  rectMode(CENTER);

  // code for initializing mic in.
  mic = new p5.AudioIn();
  mic.start();
}


function draw() {
  background(c);
  fill('blue');
  rect(x, 300, 75, 70);
  x = x + velocity;


  // get the sound input
  vol = (mic.getLevel()).toFixed(2); // returned level is between 0 and 1
if(x>width) x = 0;
velocity = 0 ;
  // check how loud the input is
  if (vol > .10) { // if the volume is LOUD?
    velocity = 10;
    // do something

    c = color(random(255), random(255), random(255)); // here I'm setting the background to a random color
  }

  // extra stuff for debugging
  textSize(18);
  text("Click the screen first to give\npermission for mic input.\nMy volume is " + vol, 10, 60);


}


// you need this code for audio programs and also, the user
// needs to click the screen before the mic input will work.

function touchStarted() {
  getAudioContext().resume();
}
