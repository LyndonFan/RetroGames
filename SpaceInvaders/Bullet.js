class Bullet{
  constructor(x,y,d){
    this.x = x;
    this.y = y;
    this.vy = scl/2 * d;
    this.used = false;
    this.canDelete = false;
  }
  update(){
    this.y += this.vy;
    if (this.y < 0 || this.y > height){
      this.canDelete = true;
    }
  }
  show(){
    fill(this.vy < 0 ? 255 : 'rgb(255,0,255)');
    rect(this.x-scl/2,this.y-scl/2,scl,scl);
  }
}
