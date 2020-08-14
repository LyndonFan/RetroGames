class Player{
  constructor(){
    this.x = 0;
    this.y = height*7/8;
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
    reference = reference - reference%scl + (reference%scl < scl/2 ? 0 : scl);
    this.x = constrain(reference - (this.width/2),0,width - this.width);
  }
  shoot(){
     bullets.push(new Bullet(this.x+this.width/2, this.y-scl, -1));
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
