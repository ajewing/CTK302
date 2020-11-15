var bubbles = [];
var dcheros;
var heroicmusic;

function setup() {

  // Tabletop stuff, for getting google spreadsheet data in.
  let url = '1gTWD6Sj5HDJIAIxqI9tktsYCSfOT9Vg6zvHDuPYnhNE'; // this is KEY of the URL from the sheet
  let settings = {
    key: url, // The url of the published google sheet
    callback: gotData, // A callback for when the data comes in
    simpleSheet: true // This makes things simpler for just a single worksheet of rows
  };

  Tabletop.init(settings); // Grab the data from the spreadsheet!
  // End Tabletop initialization stuff


  // Regular setup code we usually have
  createCanvas(600, 600);
  textAlign(CENTER);
  ellipseMode(CENTER);
  rectMode(CENTER);
  imageMode(CENTER);
  dcheros = loadImage('Assets/dcheros.jpeg');
  heroicmusic = loadImage('Assets/heroicmusic.jpg');

}

// The data comes back as an array of objects
// Each object contains all the data for one row of the sheet
function gotData(data) {

  console.log(data); // Print the data in the console

  // iterate through the array of data and create an object and push it on an array called bubbles
  for (let i = 0; i < data.length; i++) {
    bubbles.push(new Bubble(data[i].Color, data[i].Music, data[i].Superhero, data[i].Dcheros, data[i].Heroic)); // THESE Name and Shape need to match your column names in your spreadsheet!
  }

}


function draw() {
  background('blue');
  image(dcheros, width/2, height/2, 600, 600);

  // // iterate through the bubbles and display the objects!
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].drive();
  }

}


// my Bubble class
class Bubble {

  constructor(myColor, myMusic, mySuperhero, myDcheros, myHeroic) {
  this.color = myColor;
  this.music = myMusic;
  this.superhero = mySuperhero;
  this.dcheros = myDcheros ;
  this.heroicmusic = myHeroic;
  this.pos = createVector(random(width), random(height));
  this.vel = random(1, 3);
}


display() {
  // if (this.shape == "Circle") {
  //   rect(this.pos.x, this.pos.y, 50, 50);

  //   // image(name, this.pos.x...)
  // } else {
  //   ellipse(this.pos.x, this.pos.y, 50, 50);
  // }
  rect(this.pos.x, this.pos.y, 70, 70)
  image(heroicmusic,this.pos.x, this.pos.y, 70, 70);
  fill('lightblue');
  text(this.color, this.pos.x, this.pos.y - 20);
  text(this.music, this.pos.x, this.pos.y + 16);
  text(this.superhero, this.pos.x, this.pos.y);


}

drive() {
  this.pos.x = this.pos.x + this.vel;
  if (this.pos.x > width) this.pos.x = 0;
}

}
