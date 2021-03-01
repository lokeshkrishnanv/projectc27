const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, roof1
var bob1, bob2, bob3, bob4, bob5
var rope1, rope2, rop3, rope4, rope5

function preload()
{
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new roof(350,550,700,3);
	roof1 = new roof(350,150,300,10)
	bob1 = new bob(250,350,50);
	bob2 = new bob(300,350,50);
	bob3 = new bob(350,350,50);
	bob4 = new bob(400,350,50);
	bob5 = new bob(450,350,50);
	Engine.run(engine);
  
  rope1 = new rope(bob1.body, roof1.body, -50*2, 0);
  rope2 = new rope(bob2.body, roof1.body, -25*2, 0);
  rope3 = new rope(bob3.body, roof1.body,  0*2, 0);
  rope4 = new rope(bob4.body, roof1.body,  25*2, 0);
  rope5 = new rope(bob5.body, roof1.body,  50*2, 0);
}


function draw() {
  rectMode(CENTER);
  background("lightgreen");

  Engine.update(engine);

  ground.display();
  roof1.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  
  drawSprites();
 
}

function keyPressed() {
if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-150,y:0});
}
}