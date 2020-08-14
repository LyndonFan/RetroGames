class Player{
  constructor(){
    this.x = 0;
    this.y = height*7/8;
    this.width = scl*4;
    this.height = scl*2;
    this.blinkTime = 0;
  }
  check(){
    for (var i = 0; i < bullets.length; i++){
      let b = bullets[i];
      if ((!b.used) && (this.x < b.x) && (b.x < this.x+this.width) && (this.y < b.y) && (b.y < this.y+this.height)){
        this.blinkTime += 48;
        b.used = true;
      }
    }
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
    if (this.blinkTime%16<4){
      fill(255);
      rect(this.x,this.y,this.width,this.height);
    }
    this.blinkTime = max(this.blinkTime-1,0);
  }
}
