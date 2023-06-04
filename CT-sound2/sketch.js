var song;
var button;
var jumpButton;

function setup() {
  createCanvas(400, 400);
  song = loadSound("Simple Rain copy.mp3", loaded);
  button = createButton ("play");
  button.mousePressed(togglePlaying);
  jumpButton = createButton("jump");
  jumpButton.mousePressed(jumpSong); //this works well as there is only one call button and one song
  background(255);


  song.addCue(5, changeBackground, color(0, 0, 255));
}

function changeBackground(){
  background(random(255), random(255), random(255));

}

function togglePlaying(){
  if (!song.isPlaying()){
    song.play();
    song.setVolume(0.5); 
    button.html("pause"); //if you were to change it out for stop then it would go back to the beggining of the sound file
  } else {
    song.pause();
    button.html("play");
  }
  
}

function jumpSong() {
  var len = song.duration();
  var t = random(len);
  console.log(t);
  song.jump(t);
}

function loaded(){
song.setVolume(0.5);
}

function draw(){
  //if(song.currentTime() > 10);
  background (song.currentTime(), 0, 255);

}
