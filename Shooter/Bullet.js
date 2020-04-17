class Bullet{
  constructor(x,y,vx,vy){
    this.x = x;
    this.y = y;
    this.vx = vx;
    this.vy = vy;
  }
  update(){
    this.x += this.vx;
    this.y += this.vy;
  }
  show(){
    fill(255);
    circle(this.x,this.y,scl/4);
  }
}
