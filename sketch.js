var dustbin1, dustbin2, dustbin3;
var ground;
var paper;
var world;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
	//left
	 dustbin1 = new Dustbin(560, 633, 15, 100);
	dustbin1.shapeColor = "yellow";

	//middle
	 dustbin2 = new Dustbin(665, 675, 200, 16);
	dustbin2.shapeColor = "yellow";

	//right
	 dustbin3 = new Dustbin(770, 633, 15, 100);
	dustbin3.shapeColor = "yellow";

	 ground = new Ground(600, 690, 1500, 14);
	
	paper1 = new Paper(200, 590, 10);
	

	//Create the Bodies Here.
	

	Engine.run(engine);
  
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:8, y:-8});
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  paper1.display();
  ground.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
  
}



//Matter.Bodies.circle(663, 25, 10, [20], [20]);