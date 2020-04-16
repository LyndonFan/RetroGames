var scl = 20;
var p1, p2;
var b;
var fr;

function setup() {
  createCanvas(800,600);
  p = [new Player(0), new Player(1)];
  b = new Ball();
  console.log("setup done");
  f = 6;
  
  fontPixel = loadFont("Silkscreen/slkscr.ttf");
  textFont(fontPixel);
  textSize(scl*5);
}

function keyPressed(){
  if (keyIsDown(87)){
    p[0].move(-1);
  } else if (keyIsDown(83)){
    p[0].move(1);
  }
  if (keyIsDown(UP_ARROW)){
    p[1].move(-1);
  } else if (keyIsDown(DOWN_ARROW)){
    p[1].move(1);
  } 
}

function draw() {
  background(0);
  for (let i in [0,1]){
    p[i].update();
    p[i].show();
    console.log("Player "+i+": "+p[i].ypos);
  }
  b.update(p[0],p[1]);
  b.show();
  fill(150);
  for (let i in [0,1]){
    let mag = p[i].score.toString().length;
    text(p[i].score,width*i+width/4*pow(-1,i)-mag*100,height/6);
  }
  frameRate(f);
  f += 0.05;
}
