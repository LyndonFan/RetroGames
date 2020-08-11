class Enemy{
  constructor(x,y,level){
    this.x = x;
    this.y = y;
    this.vx = 0;
    this.isHit = false;
    this.level = level-1;
    this.width = scl*4;
    this.height = scl*2;
  }
  show(){
    const colors = ['rgb(255,0,0)','rgb(255,255,0)','rgb(0,255,0)','rgb(0,255,255)','rgb(0,0,255)','rgb(255,0,255)'];
    fill(colors[this.level]);
    rect(this.x,this.y,this.width,this.height);
  }
}
