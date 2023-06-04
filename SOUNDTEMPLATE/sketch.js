// a thread of code that mimics ultrasonic distance sensors and uses the mouse and user interactivity to produce noise.
// to manipulate the sounds, click the mouse and move randomly around the designated triangle. 
// the centre circle is the "object" and as a user you can traverse around it.
// find out what happens when you go left to right and closer to any three of the circles.

//ultimately to be connected to a distance sensor that manipulates the sound and images with movement
let soundA, soundB;


function preload (){
  soundA = loadSound ('inside_mix.mp3');
  soundB = loadSound ('raka.mp3');
  // place your audio file in the folder named sounds within the libraries and with the sketch pages
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  soundB.loop();
  soundB.amp(0.2);
}

function draw() {
  background(0);

  //top circle
  let x2 = 700;
  let y2 = 350;
  let size2 = 100;
  let distance2 = dist(x2, y2, mouseX, mouseY); //to make this distance bases change the mouseX/mouseY to distance
  let alpha2 = map(distance2, 0, 300, 0, 255);
  fill(70, 50, 25);
  ellipse(440, 600, 80);

  //b left circle
  let x3 = 800;
  let y3 = 350;
  let size3 = 100;
  let distance3 = dist(x3, y3, mouseX, mouseY);
  let alpha3 = map(distance3, 0, 300, 0, 255);
  fill(90, 80, 20);
  ellipse(700, 90, 80);
  
  //b right circle
  let x4 = 500;
  let y4 = 350;
  let size4 = 100;
  let distance4 = dist(x4, y4, mouseX, mouseY);
  let alpha4 = map(distance4, 0, 300, 0, 255);
  fill(80, 60, 15);
  ellipse(960, 605, 80);

  let x = 700;
  let y = 350;
  let size = 100;
  let distance = dist(x, y, mouseX, mouseY); // this is what you have to add to each circle bc as of rn they are only controlled by the mouse

  let alpha = map(distance, 0, 300, 0, 255);

  noStroke();
  fill(255, distance);
  ellipse(x, y, size, size);

  text (distance, 20, 20);
  
  let vol = map(mouseX, 0, width, 0.0, 0.2);
  let r = map(mouseY, 0, height, 0.4, 2.0);
  soundB.amp(vol);
  soundB.rate(r);

  let vol2 = map(mouseX, 0, width, 0.0, 0.2);
  let r2 = map(mouseY, 0, height, 0.4, 2.0);
  soundA.amp(vol2);
  soundA.rate(r2);


  

}

function mousePressed() {
  soundA.play();
  soundB.WaveShaperNode();
}

// check the sound library for the commands!!

function keyPressed(){
  if (key == 'a'){
    soundA.play();
    soundB.stop();
  
  }
  else if (key == 'b'){
    soundB.play();
    soundA.stop();
  }

}



//Some initial designs of the rock that I collected on Thingiverse
//the rock I decided to print - that allowed to have a lid and hollow inside, so I can ultimately hide my arduino
//any rock templates I got from thingiverse.
//MY P5 CODE

//ARDUINO CODE AND WIRING

//DEMONSTRATION

//Input
//Process
//Output

//Sprawling from this “rock”, I hope to create a network of wires or tube like material, reaching out and attempting to connect with any object in sight.//

//The process of 3D printing the hollow rock, with white filament. The deisgn was taken from Thingiverse, and originally was a reptile cave with an entrance.

//To run the P5 code, go to the html page and press the 'connect to arduino' button.

//In order for the sound to work, I decided to connect my arduino to my laptop speaker. As there were visuals to go alongside the sound I found I didnt mind the laptop being part of the interactive piece. 
//However, to further develop this project, I would connect the arduino nano to a battery and have the rock stand alone, as a truly natural, autonomous object, that omits its own sound from a speaker. I think it would be more interesting even without the P5 visuals and focussing solely on sound. 
//I would like to install the speaking rock in various public places and within nature, to fully play on this unusual, seemingly alive rock. I am also planning on making some rock formations with white clay to better create a tiny environment where this rock can function and be observed. 

//For the sound I inputted two MP3 files, one of a Balkan folk band that I frequently listen to and the other a soundpiece that I recorded using contact mics. The instruments of the band is the most prominant sound, and occassionally with the movement the sound breaks up.