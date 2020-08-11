var enemies = [];

function setup() {
  createCanvas(600,600);
  scl = 10;
  p = new Player();
  test = false;
  for (var i = scl*4; i<width-scl*4; i+=scl*4){
    for (var j = scl*2; j<5*scl*2; j+=scl*2){
      enemies.push(new Enemy(i,j,1));
    }
  }
  frameRate(48);
}


function draw() {
  background(0);
  p.update();
  p.show();
  enemies.forEach(k => k.show());
}
