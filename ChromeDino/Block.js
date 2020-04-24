class Block{
  constructor(){
    this.speed = speed;
    this.xpos = width;
    let r1 = ceil(random(4));
    let r2 = ceil(random(4));
    this.width = min(r1,r2) * scl;
    this.height = (max(r1,r2)-min(r1,r2)+1) * scl;
  }
  reset(){
    console.log("Resetting...");
    let r1 = ceil(random(4));
    let r2 = ceil(random(4));
    this.width = min(r1,r2,ceil(speed/10)) * scl;
    this.height = (max(r1,r2)-min(r1,r2)+1) * scl;
    this.xpos = width;
  }
  show(){
    fill(color(150,0,0));
    rect(this.xpos, height - groundHeight - this.height, this.width, this.height);
  }
  
  update(dino){
    this.xpos -= this.speed;
    this.speed = speed;
    if (d.ypos() > height - groundHeight - this.height && !(this.xpos > d.xpos()+d.width || this.xpos+this.width < d.xpos())){
      d.score = 0;
      speed = ORIGINALSPEED;
      this.reset();
    }
    if (this.xpos < -this.width){
      this.reset();
    }
  }
}
