
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body; 

var hanger;
var ropeImg1, ropeImg2, ropeImg3, ropeImg4, ropeImg5;
var ballImg1, ballImg2, ballImg3, ballImg4, ballImg5;

function preload()
{
	ballImg1 = loadImage("ball.png");
	ballImg2 = loadImage("ball.png");
	ballImg3 = loadImage("ball.png");
	ballImg4 = loadImage("ball.png");
	ballImg5 = loadImage("ball.png");

	ropeImg1 = loadImage("rope.png");
  ropeImg2 = loadImage("rope.png");
  ropeImg3 = loadImage("rope.png");
  ropeImg4 = loadImage("rope.png");
  ropeImg5 = loadImage("rope.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
hanger=createSprite(390,200,500,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  imageMode(CENTER);
  image(ballImg1, 200, 500, 100, 100);
  
  imageMode(CENTER);
  image(ballImg2, 300, 500, 100, 100);

  imageMode(CENTER);
  image(ballImg3, 400, 500, 100, 100);

  imageMode(CENTER);
  image(ballImg4, 500, 500, 100, 100);

  imageMode(CENTER);
  image(ballImg5, 600, 500, 100, 100);



  imageMode(CENTER);
  image(ropeImg1, 300, 330, 10, 250);

  imageMode(CENTER);
  image(ropeImg2, 400, 330, 10, 250);

  imageMode(CENTER);
  image(ropeImg3, 200, 330, 10, 250);

  imageMode(CENTER);
  image(ropeImg4, 500, 330, 10, 250);

  imageMode(CENTER);
  image(ropeImg5, 600, 330, 10, 250);

  drawSprites();
 
}



