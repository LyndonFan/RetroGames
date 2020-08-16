class Barrier{
  constructor(x,y){
    this.x = x;
    this.y = y;
    this.isHit = false;
    this.width = scl*2;
    this.height = scl*2;
  }
  check(){
    for (var i = 0; i < bullets.length; i++){
      let b = bullets[i];
      if ((!b.used) && (!this.isHit) && (this.x <= b.x) && (b.x <= this.x+this.width) && (this.y <= b.y) && (b.y <= this.y+this.height)){
        this.isHit = true;
        b.used = true;
      }
    }
  }
  show(){
    fill(255);
    rect(this.x,this.y,this.width,this.height);
  }
}
