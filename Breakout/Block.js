class Block{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = scl*4;
    this.height = scl*2;
  }
  canKeep(){
    if (!b.hasBounced && dist(b.x+b.size/2,b.y+b.size/2,this.x+this.width/2,this.y+this.height/2)<=dist(b.size/2,b.size/2,b.size+this.width/2,this.height/2)){
      if (this.y<=b.y && b.y<this.y+this.height && abs(b.x+b.size/2 - this.x - this.width/2) <= (b.size+this.width)/2){
        b.vx *= -1;
        b.hasBounced = true;
        return false;
      } else if (abs(b.y+b.size/2 - this.y - this.height/2) <= (b.size+this.height)/2 && b.x+b.size>=this.x && this.x+this.width>b.x){
        b.vy *= -1;
        b.hasBounced = true;
        return false;
      } 
    }
    return true;
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
