class Player{
  constructor(){
    this.x = width/2;
    this.y = height/2;
    this.score = 0;
    this.shootFreq = 24;
    this.countdown = this.shootFreq;
  }
  reset(){
    this.x = width/2;
    this.y = height/2;
    this.score = 0;
    this.countdown = this.shootFreq;

  }
  update(){
    
    if (keyIsDown(87)||keyIsDown(UP_ARROW)){
      this.y -= speedIncrement;
    } else if (keyIsDown(83)||keyIsDown(DOWN_ARROW)){
      this.y += speedIncrement;
    }
    if (keyIsDown(65)||keyIsDown(LEFT_ARROW)){
      this.x -= speedIncrement;
    } else if (keyIsDown(68)||keyIsDown(RIGHT_ARROW)){
      this.x += speedIncrement;
    }
    
    this.x = constrain(this.x,0,width);
    this.y = constrain(this.y,0,height);
    
    this.countdown--;
    if (millis()%(f*100) <= f*10){
      this.countdown = this.shootFreq;
      let dir = createVector(mouseX-this.x,mouseY-this.y);
      dir.normalize().mult(speedIncrement);
      bullets.push(new Bullet(this.x,this.y,dir.x,dir.y));
    }
  }
  show(){
    fill(255);
    circle(this.x,this.y,scl);
  }
}
