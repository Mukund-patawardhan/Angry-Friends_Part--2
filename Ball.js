class Ball{
    constructor(x, y) {
      var options = {
          'restitution':1,
          'friction':9.0,
          'density':5.0,
          'gravity':-100000000.0
      }
      this.body = Bodies.rectangle(x, y,30,30, options);
      this.width = 30;
      this.height = 30;
      this.IMG1=loadImage("Me--1.png");
      this.IMG2=loadImage("Me--2.png");
      this.IMG3=loadImage("Me--3.png");
      this.IMG4=loadImage("Me--4.png");
      this.IMG5=loadImage("Me--5.png");
      this.IMG6=loadImage("Me--6.png");
      this.trajectory=[];
      World.add(world, this.body);
    }
    display(){
      Matter.Body.setDensity(this.body,20);
      var pos =this.body.position;
      push();
      fill("black");
      stroke("black");
      ellipse(pos.x,pos.y, this.width);
      imageMode(CENTER);
      if(State===1){
        image(this.IMG1,pos.x,pos.y,70,70);
      }
      if(State===2){
        image(this.IMG2,pos.x,pos.y,70,70);
      }
      if(State===3){
        image(this.IMG3,pos.x,pos.y,70,70);
      }
      if(State===4){
        image(this.IMG4,pos.x,pos.y,70,70);
      }
      if(State===5){
        image(this.IMG5,pos.x,pos.y,70,70);
      }
      if(State===6){
        image(this.IMG6,pos.x,pos.y,70,70);
      }

      if(gameState==2 && this.body.velocity.x>10){
        var position = [this.body.position.x, this.body.position.y];
        this.trajectory.push(position);
      }

      for(var i=0; i<this.trajectory.length; i++){
        fill("white");
        ellipse(this.trajectory[i][0], this.trajectory[i][1],5,5);
      }

      pop();
    }
  };