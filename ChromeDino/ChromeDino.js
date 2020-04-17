var scl;
var g = 9.81;
var groundHeight;
var startX;
var d, b;
var speed;
var highscore;
var ORIGINALSPEED = 15;

function setup() {
  createCanvas(600,600);
  frameRate(24);
  scl = 30;
  groundHeight = 120;
  startX = 150;
  speed = ORIGINALSPEED;
  d = new Dino();
  b = new Block();
  highscore = 0;
}

function draw() {
  if (keyIsDown(32)||keyIsDown(UP_ARROW)){
    d.jump();
    console.log("jump!");
  }
  strokeWeight(0);
  background(color(150,150,255));
  fill(color(0,150,0));
  rect(0,height - groundHeight,width,groundHeight);
  d.update();
  d.show();
  b.update(d);
  b.show();
  fill(0);
  textSize(scl);
  text("Score: "+d.score,scl,scl);
  highscore = max(highscore,d.score);
  if (highscore === d.score && highscore > 100){
    fill(color(255,223,0));
  }
  text("Highscore: "+highscore, scl, scl*2);
  speed += 0.05;
}
