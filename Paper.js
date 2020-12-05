class Paper{
    constructor(x,y){
    var options={
        isStatic:false,
        restitution:0.1,
        friction:0.5,
        density:1.2
    }
    this.body = Bodies.circle(x, y, 10, options);
    this.x=x;
    this.y=y;
    this.r=10;
    World.add(world, this.body);
}
display(){
    push();                             
    translate(this.body.position.x, this.body.position.y);
    fill(255,20,120);
    ellipseMode(RADIUS);
    ellipse(0,0,this.r,this.r);
    pop();
   } 
} 

 
