
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var stone,mango1,mango2,mango3,mango4,mango5;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone=new Stone(235,420,30,30)
	mango1=new Mango(400,350,30)
	mango2=new Mango(450,350,30)
	mango3=new Mango(500,350,30)
	mango4=new Mango(550,350,30)
	mango5=new Mango(350,350,30)
	ground=new Ground(800,680,1600,50);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stoneObj.display()
  drawSprites();
 
}



