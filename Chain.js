class Chain {
    constructor(bodyA, pointB,num){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 80
        }
        this.pointB=pointB;
        this.num=num;
        this.IMG=loadImage("Slingshot.png");
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    rejoin(body){
        this.sling.bodyA=body;
    }

    fly(){
        this.sling.bodyA=null;
    }

    display(){
        push();
        imageMode(CENTER);
        image(this.IMG,200,300,150,200);
        if(this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        if(this.num===1){
        strokeWeight(5);
        stroke("gold");
        line(pointA.x,pointA.y,pointB.x,pointB.y);
        }else{
            strokeWeight(2);
            stroke("red");
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            line(pointA.x,pointA.y,pointB.x-50,pointB.y);
        }
        pop();
    }
}
}