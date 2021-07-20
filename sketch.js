const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var Tree, ground, Stone;

function preload()
{
	boyImage = loadImage("images/boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	Tree = new tree(600,300);
	ground = new Ground(400,10,50,50);
	Stone = new stone(300,300,50,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  image(boyImage);
  Tree.display();
  ground.display();
  Stone.display();
  drawSprites();
 
}



