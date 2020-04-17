var p;
var scl;
var bullets = [];
var enemies = [];
var f;
var speedIncrement;
var highscore;

function setup() {
  createCanvas(600,600);
  scl = 20;
  speedIncrement = 2;
  p = new Player();
  f = 3;
  highscore = 0;
}

function reset(){
  bullets = [];
  enemies = [];
  p.reset();
  f = 3;
}

function draw() {
  background(0);
  p.update();
  for (let b of bullets){
    b.update();
    b.show();
  }
  bullets = bullets.filter(b => b.x*(width-b.x)*b.y*(height-b.y)>0);
  for (let e of enemies){
    for (let b of bullets){
      if (dist(e.x,e.y,b.x,b.y) < e.size){
        enemies.splice(enemies.indexOf(e),1);
        bullets.splice(bullets.indexOf(b),1);
        p.score++;
        f *= 0.99;
        break;
      }
    }
    if (dist(e.x,e.y,p.x,p.y) < e.size){
      reset();
    }
  }
  if (millis()%(f*1000) <= 20){
    enemies.push(new Enemy());
  }
  for (let e of enemies){
    e.update();
    e.show();
  }
  p.show();
  textSize(scl);
  fill(255);
  text("Score: "+p.score,scl,scl);
  highscore = max(highscore,p.score);
  if (highscore === p.score && highscore > 10){
    fill(color(255,223,0));
  }
  text("Highscore: "+highscore,scl,scl*2);
}
