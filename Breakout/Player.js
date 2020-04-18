class Player{
  constructor(){
    this.x = 0;
    this.y = width*3/4;
    this.width = 8*scl;
    this.height = scl;
  }
  update(){
    var reference;
    if (test){
      reference = b.x+this.width/4;
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
