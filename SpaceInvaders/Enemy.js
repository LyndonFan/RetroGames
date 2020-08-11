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
  update(d){
    this.x += this.vx;
    if ((this.x + this.width >= width) && (this.vx > 0)){
      toDrop = true;
    } else if ((this.x <= 0) && (this.vx < 0)){
      toDrop = true;
    }
  }
  drop(){
    this.vx *= -1;
    this.y += this.height;
  }
  show(){
    const colors = ['rgb(255,0,0)','rgb(255,255,0)','rgb(0,255,0)','rgb(0,255,255)','rgb(0,0,255)','rgb(255,0,255)'];
    fill(colors[this.level]);
    rect(this.x,this.y,this.width,this.height);
  }
}
