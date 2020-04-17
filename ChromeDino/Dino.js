class Dino{
  constructor(){
    this.relY = 0;
    this.speed = 0;
    this.ORIGINALSIZE = 2*scl;
    this.width = this.ORIGINALSIZE;
    this.height = this.ORIGINALSIZE;
    this.score = 0;
  }
  xpos(){
    return startX + (this.ORIGINALSIZE - this.width) / 2;
  }
  ypos(){
    return height - groundHeight - this.relY;
  }
  show(){
    fill(color(255,255,0));
    rect(this.xpos(), this.ypos() - this.height, this.width, this.height);
  }
  jump(){
    if (this.relY<=0){
      this.speed = g*4;
      this.width -= scl/4;
      this.height += scl/4;
      console.log(this.width, this.height);
    } else if (this.speed > -g/2){
      this.speed += g/2;
    }
  }
  update(){
    this.score++;
    this.relY += this.speed;
    if (this.relY>0){this.speed -= g;}
    else {
      this.relY = 0;
      if (this.speed<0){
        this.width = this.ORIGINALSIZE + scl/4;
        this.height = this.ORIGINALSIZE - scl/4;
        this.speed = 0;
      }
    }
    if (this.width < this.ORIGINALSIZE){this.width++;}
    if (this.height > this.ORIGINALSIZE){this.height--;}
    if (this.width > this.ORIGINALSIZE){this.width--;}
    if (this.height < this.ORIGINALSIZE){this.height++;}
  }
}
