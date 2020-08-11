var enemies = [];
var toDrop = false;

function setup() {
  createCanvas(600,600);
  scl = 10;
  p = new Player();
  test = false;
  for (var i = scl*2; i<width-scl*2; i+=scl*4){
    for (var j = 0; j<5; j++){
      enemies.push(new Enemy(i,j*scl*4,4-j));
    }
  }
  frameRate(4);
}


function draw() {
  background(0);
  p.update();
  p.show();
  if (toDrop){
    enemies.forEach(k => k.drop());
    toDrop = false;
  } else {
    enemies.forEach(k => k.update());
  }
  enemies.forEach(k => k.show());
}
