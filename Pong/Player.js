class Player{
  constructor(side){
    this.side = side;
    this.yspeed = 0;
    this.xpos = (width-scl) * this.side;
    this.height = 4*scl;
    this.ypos = (height - this.height)/2;
    this.score = 0;
  }
  
  move(dir){
    this.ypos += dir * scl;
    this.ypos = constrain(this.ypos,0,height - this.height);
  }
  
  update(){
    this.ypos = this.ypos;
  }
  
  show(){
    fill(255);
    rect(this.xpos,this.ypos,scl,this.height);
  }
}
