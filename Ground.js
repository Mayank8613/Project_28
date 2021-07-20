class Ground {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.body = Bodies.rectangle(x,y,w,h, {isStatic: true});
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.x,this.body.y);
        fill(128,128,128);
        rectMode(CENTER);
        rect(0,0,this.w,this.h);
        pop();
    }
}