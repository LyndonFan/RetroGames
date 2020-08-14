var enemies = [];
var toDrop = false;
var period = 96;
var tick = 0;
var bullets = [];
var scl;

function setup() {
  createCanvas(800,600);
  scl = 10;
  p = new Player();
  test = false;
  for (var i = 0; i<11; i+=1){
    for (var j = 0; j<5; j++){
      enemies.push(new Enemy(width/2 - 5*scl*6 + i*scl*6,scl*6+j*scl*4,4-j));
    }
  }
  frameRate(48);
}


function draw() {
  background(0);
  p.update();
  p.show();
  tick += 2;
  if (tick >= period){
    tick -= period;
    if (toDrop){
      enemies.forEach(k => k.drop());
      toDrop = false;
    } else {
      enemies.forEach(k => k.update());
    }
    p.shoot();
  }
  enemies.forEach(k => k.show());
  bullets.forEach(k => k.update());
  bullets.forEach(k => k.show());
  period = 96 - 55 + enemies.length;
}