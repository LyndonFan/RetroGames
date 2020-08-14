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
  for (var i = 0; i<11; i++){
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
  enemies.forEach(k => k.check());
  enemies = enemies.filter(k => !k.isHit);
  bullets = bullets.filter(k => !k.used && !k.canDelete);
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
  bullets.forEach(k => k.update());
  enemies.forEach(k => k.show());
  bullets.forEach(k => k.show());
  period = 96 - 55 + enemies.length;
  console.log(enemies);
  console.log(bullets);
}
