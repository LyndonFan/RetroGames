class Enemy{
  constructor(){
    this.x = null;
    this.y = null;
    this.size = scl*1.5;
    let randNum = floor(random(4));
    if (randNum%2===0){
      this.x = int(randNum/2)*width;
      this.y = random(height);
    } else {
      this.x = random(width);
      this.y = int((randNum-1)/2)*height;
    }
  }
  update(){
    let dir = createVector(p.x-this.x,p.y-this.y);
    dir.normalize().mult(speedIncrement);
    this.x += dir.x;
    this.y += dir.y;
  }
  show(){
    fill(128);
    circle(this.x, this.y, this.size);
  }
}
