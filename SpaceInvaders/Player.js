class Player{
  constructor(){
    this.x = 0;
    this.y = width*3/4;
    this.width = scl*4;
    this.height = scl*2;
  }
  update(){
    var reference;
    if (test){
      reference = b.x+b.vx*this.width/4;
    } else {
      reference = mouseX;
    }
    this.x = constrain(reference - (this.width/2),0,width - this.width);
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
