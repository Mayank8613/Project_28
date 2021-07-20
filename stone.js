class stone {
    constructor(x,y,w,h){
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.image = loadImage("images/stone.png");

        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        
        this.body = Bodies.rectangle(x,y,w,h, {options});
        World.add(world,this.body);
    }
    display(){
        push();
        translate(this.body.x,this.body.y);
        fill(128,128,128);
        imageMode(CENTER);
        image(this.image, 0, -this.body/2, this.w, this.h);
        pop();
    }
}