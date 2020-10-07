let numberOfTouches ;
let img1, img2, img3 ;

function setup() {
  createCanvas(400, 400);
  imageMode(CENTER);
img1 = loadImage("assets/1.jpg");
img2 = loadImage("assets/2.jpg");
img3 = loadImage("assets/3.jpg");

}

function draw() {
  clear();
  numberOfTouches = touches.length;
  text(numberOfTouches + ' touches', 5, 10);

  switch(numberOfTouches) {
    case 0:
      text("Have a touch", 5, 22) ;
      break ;

      case 1:
       text("it's kind of dark in here", 5, 22) ;
      // put a picture here
      image(img1, width/2, height/2);
      break ;

      case 2:
      text("two fingers are touching the screen", 5, 22) ;
            // put a picture here
      image(img2, width/2, height/2);
      break ;

      case 3:
     text("three are touching the screen", 5, 22) ;
            // put a picture here
      image(img3, width/2, height/2);
      break ;


  }

}
