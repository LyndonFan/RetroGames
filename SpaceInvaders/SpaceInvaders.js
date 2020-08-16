var enemies = [];
var toDrop = false;
var period = 96;
var tick = 0;
var bullets = [];
var barriers = [];
var scl;
var pause;

function setup() {
  createCanvas(800,600);
  scl = 10;
  p = new Player();
  pause = 0;
  test = false;
  for (var i = 0; i<11; i++){
    for (var j = 0; j<5; j++){
      enemies.push(new Enemy(width/2 - 5*scl*6 + i*scl*6,scl*6+j*scl*4,4-j));
    }
  }
  for (var k=0; k<4; k++){
    for (i = 0; i<4; i++){
      for (j = 0; j<4; j++){
        barriers.push(new Barrier((4*k+1)*width/16+i*scl*2, height*11/16+j*scl*2));
      }
    }
  }
  frameRate(48);
}


function draw() {
  background(0);
  if (pause==0){
    p.update();
    p.check();
    barriers.forEach(k => k.check());
    barriers = barriers.filter(k => !k.isHit);
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
  } else {
    pause--;
  }
    p.show();
    enemies.forEach(k => k.show());
    bullets.forEach(k => k.show());
    barriers.forEach(k => k.show());
    period = 96 - 55 + enemies.length;
  
}
