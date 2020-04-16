function Snake(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  
  this.total = 0;
  this.tail = [];
  
  this.update = function(){
    
    for (var i = 0; i < this.tail.length-1; i++){
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total-1] = createVector(this.x,this.y);
    
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
    
    this.x = (this.x+width)%(width);
    this.y = (this.y+height)%(height);
  }
  
  this.show = function(){
    for (var i=0; i<this.tail.length; i++){
      fill(map(i,0,this.tail.length,200,255));
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    fill(255);
    rect(this.x,this.y,scl,scl);
  }
  
  this.death = function(){
    for (var i=0; i<this.tail.length; i++){
      if (this.tail[i].x === this.x && this.tail[i].y === this.y){
        this.total = 0;
        this.tail = [];
      }
    }
  }
  
  this.dir = function(x, y){
    this.xspeed = x;
    this.yspeed = y;
  }
  
  this.eat = function(pos){
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d<1){
      this.total++;
    }
    return (d<1);
  }
}
