var p;
var b;
var scl;
var test;
var blocks = [];

function setup() {
  createCanvas(600,600);
  scl = 10;
  p = new Player();
  b = new Ball();
  test = true;
  for (var i = scl*4; i<width-scl*4; i+=scl*4){
    for (var j = scl*2; j<5*scl*2; j+=scl*2){
      blocks.push(new Block(i,j));
    }
  }
  frameRate(36);
}


function draw() {
  background(0);
  b.update();
  p.update();
  p.show();
  b.show();
  blocks = blocks.filter(k => k.canKeep());
  blocks.forEach(k => k.show());
  if (b.y<6*scl*2 || b.y>p.y-p.height*3){
    frameRate(36);
  } else {frameRate(48);}
}
