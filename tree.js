class tree {
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.dustbinWidth = 450;
        this.dustbinHeight = 600;
        this.wallThickness = 10;
        this.image = loadImage("images/tree.png");

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinWidth,this.wallThickness,{isStatic: true});
        this.leftBody = Bodies.rectangle(0,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic: false});
        this.rightBody = Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.dustbinHeight,this.wallThickness,{isStatic: false});
        World.add(world,this.bottomBody);
        World.add(world,this.leftBody);
        World.add(world,this.rightBody);

    
    }
    display(){
        var posBottom = this.bottomBody.position;
        push();
        translate(posBottom.x,posBottom.y+10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.dustbinHeight/2, this.dustbinWidth, this.dustbinHeight);
        pop();
    }
}