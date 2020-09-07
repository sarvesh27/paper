
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper,ground,dustbin1,dustbin2,dustbin3

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
paper=new Paper(100,600,10,10)
ground=new Ground(200,680,1920,10)
dustbin1=new Ground(400,670,100,15)
dustbin2=new Ground(450,652,15,50)
dustbin3=new Ground(350,652,15,50)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
paper.display()
rectMode(CENTER)
rect(400,670,100,15)
rectMode(CENTER)
rect(450,652,15,50)
rectMode(CENTER)
rect(350,652,15,50)
rectMode(CENTER)
rect(ground.body.position.x,ground.body.position.y,1920,10)
  drawSprites();
 
}


function keyPressed(){
if(keyCode===UP_ARROW){
console.log("hi")
	Matter.Body.applyForce(paper.body,paper.body.position,{x:10,y:-10})
}



}

