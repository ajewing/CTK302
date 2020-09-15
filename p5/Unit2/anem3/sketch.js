var x = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100);

push();
  translate(x, 30);
  scale(.5)

  //  rect(0, 250, 50, 50);
  avatar();
  x = x + 5;
  if (x > width) {
x = -400;
  }

  pop();

}

function avatar() {
  triangle(185, 201, 348, 170, 352, 238);
  triangle(449, 170, 449, 232, 595, 198);

  ellipse(405, 501, 500, 100);
  // this ellipse should be 200x200 pixels in the center of the screen
  fill(217, 102, 255)
  ellipse(width / 2, height / 2, 320, 230);


  fill(217, 102, 255)
  arc(397, 321, 100, 180, PI, 0); // frown




    fill(204, 102, 255)
    ellipse(395, 28, 200, 250);




    fill(217, 25, 255);
    ellipse(395, 205, 130, 180);





    fill('black');
    ellipse(395, 205, 40, 80);



    ellipse(395, 205, 40, 80);



    ellipse(394, 16, 500, 10);

  fill(217, 25, 255)
  triangle(393, 166, 488, 29, 292, 28);




  // the mouth - smile if pressed, frown otherwise
  if (mouseIsPressed) {
    fill(255, 230, 102);
    ellipse(405, 501, 500, 100);
    // this ellipse should be 200x200 pixels in the center of the screen
    fill(217, 102, 255)
    ellipse(width / 2, height / 2, 290, 290);


    fill(217, 102, 255)
    arc(397, 321, 100, 180, PI, 0); // frown




      fill(204, 102, 255)
      ellipse(395, 28, 200, 250);




      fill(217, 25, 255);
      ellipse(395, 205, 130, 180);





      fill('black');
      ellipse(395, 205, 40, 80);



      ellipse(395, 205, 40, 80);



      fill(255, 203, 102);
      ellipse(394, 16, 500, 10);

    fill(217, 25, 255)
    triangle(393, 166, 488, 29, 292, 28);


    fill('white')
    quad(442, 195, 588, 61, 755, 227, 581, 222, 482, 225);
    quad(343, 203, 233, 29, 169, 101, 59, 193, 147, 134);

    fill(251, 255, 230);
      ellipse(394, 43, 210, 10);



      ellipse(394, 63, 200, 10);



      ellipse(394, 83, 190, 10);



      ellipse(394, 103, 180, 10);



      ellipse(394, 123, 170, 10);



      ellipse(394, 143, 120, 10);

      fill(255, 247, 204)
      ellipse(404, 144, 10, 5);
      ellipse(382, 144, 10, 5);
      ellipse(414, 121, 15, 5);
      ellipse(373, 121, 15, 5);
      ellipse(404, 144, 10, 5);
      ellipse(427, 103, 15, 5);
      ellipse(357, 103, 15, 5);
      ellipse(395, 103, 15, 5);
      ellipse(437, 83, 15, 5);
      ellipse(352, 83, 15, 5);
      ellipse(395, 83, 15, 5);
      ellipse(395, 64, 15, 5);
      ellipse(337, 64, 15, 5);
      ellipse(357, 103, 15, 5);
      ellipse(444, 64, 15, 5);
      ellipse(330, 43, 15, 5);
      ellipse(395, 43, 15, 5);
      ellipse(451, 43, 15, 5);





      fill(255, 230, 102);
      ellipse(340, 131, 40, 40);
      ellipse(303, 8, 40, 40);
      ellipse(297, 83, 40, 40);
      ellipse(318, 108, 40, 40);
      ellipse(290, 53, 40, 40);
      ellipse(287, 29, 40, 40);
      ellipse(452, 126, 40, 40);
      ellipse(476, 104, 40, 40);
      ellipse(489, 73, 40, 40);
      ellipse(494, 37, 40, 40);
      ellipse(480, 5, 40, 40);


      //   triangle(185, 201, 348, 170, 352, 238);
      //triangle (449,170, 449, 232,595, 198);

    }



  }
