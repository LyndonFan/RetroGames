class Enemy{
  constructor(x,y,level){
    this.x = x;
    this.y = y;
    this.vx = scl*2;
    this.isHit = false;
    this.level = level;
    this.width = scl*2;
    this.height = scl*2;
  }
  check(){
    for (var i = 0; i < bullets.length; i++){
      let b = bullets[i];
      if ((!b.used) && (!this.isHit) && (this.x <= b.x) && (b.x <= this.x+this.width) && (this.y <= b.y) && (b.y <= this.y+this.height)){
        this.isHit = true;
        b.used = true;
        for (var j = 0; j < enemies.length; j++){
          if ((enemies[j].x==this.x && enemies[j].y < this.y)){
            enemies[j].level--;
          }
        }
      }
    }
  }
  update(){
    this.x += this.vx;
    if ((this.x + this.width >= width) && (this.vx > 0)){
      toDrop = true;
    } else if ((this.x <= 0) && (this.vx < 0)){
      toDrop = true;
    }
    
    if (this.level==0 && random(2)>1){
      this.shoot();
    }
  }
  drop(){
    this.vx *= -1;
    this.y += this.height;
  }
  shoot(){
     bullets.push(new Bullet(this.x+this.width/2, this.y+this.height+scl, 1));
  }
  show(){
    this.level = max(this.level,0);
    const colors = ['rgb(255,0,0)','rgb(255,255,0)','rgb(0,255,0)','rgb(0,200,200)','rgb(0,0,255)','rgb(255,0,255)'];
    fill(colors[this.level]);
    rect(this.x,this.y,this.width,this.height);
  }
}
