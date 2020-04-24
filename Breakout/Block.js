class Block{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.width = scl*4;
    this.height = scl*2;
  }
  canKeep(){
    if (!b.hasBounced && this.x-b.size<=b.x && b.x<=this.x+this.width && this.y-b.size<=b.y && b.y<=this.y+this.height){
      if ((b.x-this.x<=b.y-this.y && b.x-this.x+b.y-this.y<=this.height-b.size) || (b.x-this.x-this.height>=b.y-this.y && b.x-this.x+b.y-this.y>=this.width-b.size)){
        b.vx *= -1;
      } else {
        b.vy *= -1;
      }
      b.hasBounced = true;
      return false;
    }
    return true;
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
