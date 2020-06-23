class Friend{
  constructor(x, y,num) {
    var options = {
        'restitution':0,
        'friction':9.0,
        'density':0.8,
        'gravity':1.0
    }
    this.body = Bodies.rectangle(x, y,60,60, options);
    this.width =60;
    this.height = 60;
    World.add(world, this.body);
    this.number=num;
    this.image=loadImage("Friend--"+ this.number + ".png");
    this.Visiblity=255;
    this.gs=0;
    
  }
  display(){
    push();
    if(this.body.speed > 18){
      this.gs=1;
    }
    if(this.gs===0  ){
      var pos =this.body.position;
    rectMode(CENTER);
    noFill();
    noStroke();
    rect(pos.x, pos.y, this.width, this.height);
    imageMode(CENTER);
    image(this.image, this.body.position.x, this.body.position.y, 60, 60);
     }else{
       World.remove(world, this.body);
       //Matter.Sleeping.set(this.body,true);
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       imageMode(CENTER);
       image(this.image, this.body.position.x, this.body.position.y, 60, 60);
     }
    //console.log(this.body.speed);
    pop();
  }

  Score(){
    push();
    if(this.Visiblity<0 && this.Visiblity>-6){
      score=score+10;
      this.Visiblity=255;
      this.gs=0;
      World.add(world,this.body);
      Matter.Body.setPosition(this.body,{x:random(300,1350),y:random(-100,500)});
      Matter.Body.setVelocity(this.body,{x:0,y:0});
      console.log(this.body.speed);
    }
    pop();
  }
  
}