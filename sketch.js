
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball, ball_options, ground, left, right;


function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	ball_options = {
		restitution: 0.5,
		friction:0
		
	}
	//Create the Bodies Here.
	ball = Matter.Bodies.circle(200, 200, 30, ball_options)
	World.add(world, ball)

	ground = new Ground(width/2, 670, width, 20)
	left = new Ground(1100,600,20,120)
	right = new Ground(1350, 600, 20, 120)

	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ground.show()
  left.show()
  right.show()

  ellipse(ball.position.x, ball.position.y, 30)
  drawSprites();
 
}

function keyPressed(){
	if(keyCode == UP_ARROW) {
		Matter.Body.applyForce(ball, ball.position, {x:0.05,y:-0.05})
	}
}

