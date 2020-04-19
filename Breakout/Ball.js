class Ball{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.size = scl;
    this.vx = (floor(random(2))-0.5)*2;
    this.vy = -1;
    this.hasBounced = false;
  }
  update(){
    this.hasBounced = true;
    this.x += this.vx*scl/2;
    this.y += this.vy*scl/2;
    if (this.y<=0){
      this.y = 0;
      this.vy *= -1;
    }
    else if (this.x<=0 || this.x>=width-this.size){
      this.x = constrain(this.x,0,width-this.size);
      this.vx *= -1;
    }
    else if (this.y+this.size >= p.y+p.height && this.y<=p.y && this.x<=p.x+p.width && p.x-this.size <= this.x){
      let diffx = (this.x+this.size/2) - (p.x+p.width/2);
      let angle = diffx * Math.PI/3 / (this.size+p.width/2);
      this.vx = Math.sin(angle);
      this.vy = -Math.cos(angle);
    } else {
      this.hasBounced = false;
    }
    this.vx = constrain(this.vx,-4,4);
    this.vy = constrain(this.vy,-4,4);
    //if (p.y-scl<=this.y && this.y<=p.y+p.height && this.vy>0){this.vy *= -1;}
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.size,this.size);
  }
}
