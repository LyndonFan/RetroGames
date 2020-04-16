class Ball{
  constructor(){
    this.x = floor(width/scl/2)*scl;
    this.y = floor(height/scl/2)*scl;
    this.xspeed = floor(random(2))*2 - 1;
    this.yspeed = floor(random(2))*2 - 1;
  }
  reset(newSide){
    this.x = floor(width/scl/2)*scl;
    this.y = floor(height/scl/2)*scl;
    this.xspeed = newSide;
    this.yspeed = floor(random(2))*2 - 1;
    f = 6;
  }
  update(p1, p2){
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
    if (this.x < 0){p2.score += 1; this.reset(1);}
    else if (this.x > width - scl){p1.score += 1; this.reset(-1);}
    else if (this.x <= scl && p1.ypos <= this.y && this.y <= p1.ypos + p1.height){this.xspeed = 1;}
    else if (this.x >= width - 2*scl && p2.ypos <= this.y && this.y <= p2.ypos + p2.height){this.xspeed = -1;}
    if (this.y == 0){this.yspeed *= -1;}
    if (this.y == height - scl){this.yspeed *= -1;}
  }
  show(){
    fill(255);
    circle(this.x + scl/2, this.y + scl/2, scl);
  }
}
