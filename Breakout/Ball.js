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
    this.x += this.vx*scl;
    this.y += this.vy*scl;
    if (this.y<=0){
      this.y = 0;
      this.vy *= -1;
    }
    else if (this.x<=0 || this.x>=width-this.size){
      this.x = constrain(this.x,0,width-this.size);
      this.vx *= -1;
    }
    else if (this.y+this.size >= p.y && this.y<=p.y && this.x>=p.x && this.x+this.size <= p.x+p.width){
      if (abs(this.x+this.size/2 - p.x - p.width/2) < p.width*3/8){
        this.vx /= (abs(this.vx)==1)?1:2;
        this.vy /= (abs(this.vy)==1)?-1:-2;
      } else {
        this.vx *= 2;
        this.vy *= -2;
      }
    } else {
      this.hasBounced = false;
    }
    this.vx = constrain(this.vx,-4,4);
    this.vy = constrain(this.vy,-4,4);
    if (p.y-scl<=this.y && this.y<=p.y+p.height && this.vy>0){this.vy *= -1;}
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.size,this.size);
  }
}
