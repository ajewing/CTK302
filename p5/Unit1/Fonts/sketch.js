var f, f1;

function setup() {
  createCanvas(800, 800);

  f = loadFont("assets/b.ttf");
    f1 = loadFont("assets/ch.ttf");



  textAlign(CENTER);
}

function draw() {
  background(100);

fill("red");
  textFont(f);
  textSize(60);
  text("Why So Serious?", width / 2, height / 2);

fill("blue");
  textFont(f1);
  textSize(30);
  text("It Is Nothing", width / 2, height / 2+100);

}
