var p;
var b;
var scl;
var test;
var blocks = [];
var gameStatus = 0;

function setup() {
  createCanvas(600,600);
  scl = 10;
  p = new Player();
  b = new Ball();
  test = false;
  for (var i = scl*4; i<width-scl*4; i+=scl*4){
    for (var j = scl*2; j<5*scl*2; j+=scl*2){
      blocks.push(new Block(i,j));
    }
  }
  frameRate(48);
}


function draw() {
  background(0);
  if gameStatus==1:
    text(
  b.update();
  p.update();
  p.show();
  b.show();
  blocks = blocks.filter(k => k.canKeep());
  blocks.forEach(k => k.show());
}
