const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var gameState;
var bgIMG,bg;
var ball1;
var friends;
var State=1;
var bomb1,bomb2;
var a=0,b=0,c=0,d=0,e=0;
var chain3;
var score=0;
var powers=['Normal','Super Speed','Multiply','Super Push','Super Link','Super Smash','Normal'];
var img=[1,2,3,4,5,6];
var S="black";
var GameState=0;

function preload(){
  getBackgroundImg();
  IMG1=loadImage("Me--1.png");
  IMG2=loadImage("Me--2.png");
  IMG3=loadImage("Me--3.png");
  IMG4=loadImage("Me--4.png");
  IMG5=loadImage("Me--5.png");
  IMG6=loadImage("Me--6.png");
}

function setup() {
  createCanvas(1300,600);

  engine = Engine.create();
  world = engine.world;

  friends=[1,2,3,4,5,6,7,8,9];

  friend1= new Friend (1002,100,1);
  friend2= new Friend (1100,400,2);
  friend3= new Friend (1202,100,3);
  friend4= new Friend (400,100,4);
  friend5= new Friend (502,100,5);
  friend6= new Friend (600,300,7);
  friend7= new Friend (702,400,6);
  friend8= new Friend (800,350,8);
  friend9= new Friend (902,400,9);
 

  ground_bottom= new Ground (700,600,1500,100);
  ground_side= new Ground(1300,300,100,600);
  ground_top=new Ground (700,-200,1400,100);
  g1=new Ground (700,500,150,10);
  g2=new Ground (500,200,150,10);
  g3=new Ground (1200,300,150,10);
  g4=new Ground (1000,350,150,10);
  g5=new Ground (800,400,150,10);
  g6=new Ground (900,480,150,10);
  g7=new Ground (700,50,30,150);
  g8=new Ground (200,500,50,250);
  g9=new Ground (200,100,150,30);

  ball1= new Ball (290,330);
  chain1=new Chain(ball1.body,{x:220,y:230},2);
  chain2=new Chain(friend6.body,{x:500,y:200},3);

  bomb1=new Ball(-10000,0);
  bomb2=new Ball(-10000,0);
  bomb3=new Ball(-10000,0);
  bomb4=new Ball(-10000,0);
  bomb5=new Ball(-10000,0);
  
  gameState=1;

}

function draw() {
  if(GameState==0){
  imageMode(CORNER);
  if(bgIMG){
  background(bgIMG);  
  }else{
    background("white");
  }

  Engine.update(engine);

  chain1.display();
  chain2.display();

  if(c===1){
  chain3.display();
  }
  ground_bottom.display();
  ground_side.display();
  ground_top.display();
  friend1.display();
  friend2.display();
  friend3.display();
  friend4.display();
  friend5.display();
  friend6.display();
  friend7.display();
  friend8.display();
  friend9.display();

  friend1.Score();
  friend2.Score();
  friend3.Score();
  friend4.Score();
  friend5.Score();
  friend6.Score();
  friend7.Score();
  friend8.Score();
  friend9.Score();

  
  if(friend6.gs===1){
    chain2.fly();
  }

  console.log(State+"___"+c);

  g1.display();
  g2.display();
  g3.display();
  g4.display();
  g5.display();
  g6.display();
  g7.display();
  g8.display();
  g9.display();

  bomb1.display();
  bomb2.display();
  bomb3.display();
  bomb4.display();
  bomb5.display();

  ball1.display();

  imageMode(CENTER);
  if(State===1){
    image(IMG2,100,450,100,100);
  }
  if(State===2){
    image(IMG3,100,450,100,100);
  }
  if(State===3){
    image(IMG4,100,450,100,100);
  }
  if(State===4){
    image(IMG5,100,450,100,100);
  }
  if(State===5){
    image(IMG6,100,450,100,100);
  }
  if(State===6){
    image(IMG1,100,450,100,100);
  }

  if(score>99){
    GameState=1;
  }
  
  drawSprites();

  textSize(20);
  text("Press SPACE to Use Next Striker",10,70);
  if(State===5){
    if(c===0){
      text("Press ESC to link with the Mouse's position",10,20);
    }else{
      text("Press BACKSPACE to Release Link",10,20);
    }
  }
  if(State===2){
    text("Press ESC to Dash Fast Horizontaly",10,20);
  }
  if(State===3){
    text("Press ESC to Split into 6 Strikers",10,20);
  }
  if(State===4){
    text("Press ESC to Grab onto all Friends and Push",10,20);
  }
  if(State===6){
    text("Press ESC to Smash Verticaly Down",10,20);
  }

  fill(S);
  textSize(30);
  text(powers[State],0,520);
  text(powers[State-1],150,200);
  textSize(70);
  text("Score: "+score,800,100);
  textSize(50);
  text("TARGET Score : 100",750,170);

}else{
  fill(S);
  stroke(S);
  textSize(200);
  text("YOU WIN",100,300);
  frameRate(0);
}

}
function mouseDragged(){
  if(GameState===0){
  if(gameState===1){
  Matter.Body.setPosition(ball1.body,{x:mouseX+50,y:mouseY});
  
}
  }
}
function mouseReleased(){
  if(GameState===0){
  if(gameState===1){
  chain1.fly();
  gameState=2;
  }
}
}

function keyPressed(){
  if(GameState===0){
  if(keyCode===32){
    score=score-5;
    Matter.Body.setPosition(ball1.body,{x:220,y:230});
    chain1.rejoin(ball1.body);
    ball1.trajectory=[];
    bomb1.trajectory=[];
    bomb2.trajectory=[];
    bomb3.trajectory=[];
    bomb4.trajectory=[];
    bomb5.trajectory=[];
    gameState=1;
    Matter.Body.setPosition(bomb1.body,{x:-1000,y:-1000});
    Matter.Body.setPosition(bomb2.body,{x:-1000,y:-1000});
    Matter.Body.setPosition(bomb3.body,{x:-1000,y:-1000});
    Matter.Body.setPosition(bomb4.body,{x:-1000,y:-1000});
    Matter.Body.setPosition(bomb5.body,{x:-1000,y:-1000});
    if(State===6){
      State=1;
    }else{
      State=State+1;
    }
    a=0;
    b=0;
    d=0;
    e=0;
    console.log(State);
    if(c===1){
      chain3.fly();
      c=0;
    }
  }
  if(keyCode===27){
    if(gameState===2){
    if(State===2){
      if(e==0){
      Matter.Body.setVelocity(ball1.body,{x:60,y:0});
      }
    }
    if(State===3){
      if(a===0){
      Matter.Body.setPosition(bomb1.body,{x:ball1.body.position.x+30,y:ball1.body.position.y+100});
      Matter.Body.setPosition(bomb2.body,{x:ball1.body.position.x-30,y:ball1.body.position.y+200});
      Matter.Body.setPosition(bomb3.body,{x:ball1.body.position.x,y:ball1.body.position.y-100});
      Matter.Body.setVelocity(bomb3.body,{x:0,y:-10});
      Matter.Body.setPosition(bomb4.body,{x:ball1.body.position.x-50,y:ball1.body.position.y});
      Matter.Body.setVelocity(bomb4.body,{x:-10,y:0});
      Matter.Body.setPosition(bomb5.body,{x:ball1.body.position.x+50,y:ball1.body.position.y});
      Matter.Body.setVelocity(bomb5.body,{x:10,y:0});
      console.log(bomb1.body.position.x);
      a=1;
      }
    }
    if(State===4){
      if(b===0){
      Matter.Body.applyForce(friend1.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend2.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend3.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend4.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend5.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend6.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend7.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend8.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      Matter.Body.applyForce(friend9.body,{x:ball1.body.position.x,y:ball1.body.position.y},{x:random(15,30),y:random(10,30)});
      b=1;
    }
    }
    if(State===5){
      if(c===0){
      chain3=new Chain(ball1.body,{x:mouseX,y:mouseY},1);
      c=1;
      }
      
    }
    if(State===6){
      if(d==0){
      Matter.Body.setVelocity(ball1.body,{x:0,y:60});
      Matter.Body.setDensity(ball1.body,80);
      d=1;
      }
    }
  }
}
  if(keyCode===8){
    if(c===1){
      chain3.fly();
  }
  }
}
}
async function getBackgroundImg(){
  if(GameState===0){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  if(hour>8 && hour < 15){
    bg="school1.jpg";
    S="black";
  }else{
  if(hour>15 && hour<20){
     bg="Background.jpg"
     S="black";
  }else{
    bg="home.jpg";
    S="red";
}
}
bgIMG=loadImage(bg);
  }
}
