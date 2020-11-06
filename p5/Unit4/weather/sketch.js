// Note - you must change line 19 to your own APPID to get this to work!

var weather;
var weatherID = 0; // returned in the JSON weather element
var myState = 0;
var x = 0;
var windspeed = 0;
var temperature = 0;
var humidity = 0;
var name = '';
var f;
var dv;

function setup() {
  createCanvas(400, 400);

  f = loadFont("assets/Demode.ttf");


  // HERE is the call to get the weather.

  var myCityString = 'https://api.openweathermap.org/data/2.5/weather?zip=92328,US&units=imperial&';

  //You can also use "zipcode" - var myJSONString = 'https://api.openweathermap.org/data/2.5/weather?zip=61820,us&units=imperial&';

  var myIDString = 'appid=df0e6fc732c3095e95be710cfe976837'; // USE YOUR ID HERE, take out the x's!!!

  var myBigString = myCityString + myIDString;

  loadJSON(myBigString, gotData); // that gotData function happens when JSON comes back.

  dv = loadImage('Assets/dv.jpg');
}


function gotData(data) {

  weather = data;
  console.log(weather); // for debugging purposes, print out the JSON data when we get it.
  windspeed = weather.wind.speed;
  temperature = weather.main.temp;
  humidity = weather.main.humidity;
  name = weather.name;


}


function draw() {
  switch (myState) {
    case 0:
      if (weather) {
        myState = 1;
      }
      break;

    case 1:
      background(200);
      fill('black');
      image(dv, 0, 0, width, height)
      textFont(f);
      textSize(17);
      text("What is the weather in " + weather.name + "?", 20, 20);
      text("windspeed is " + windspeed, 20, 40);
      text("humidity is " + humidity, 20, 60);
      text("temperature is " + temperature, 20, 80);
      text("The lowest elevation in North America", 20, 100);


      // cloud
      fill('white');
      noStroke();
      ellipse(x, 300, 200, 100);
      ellipse(x + 50, 350, 170, 70);

      // move the cloud's x position
      x = x + windspeed / 3;
      if (x > width) x = 0;

      break;

  }
}
