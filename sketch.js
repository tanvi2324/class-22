const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var ground;
var ball;




function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  var ground_options={
    isStatic:true
  }

  
  
  ground=Bodies.rectangle(width/2,380,400,15,ground_options);
  World.add(world,ground);

var ball_options={
  restitution:0.5
}

  ball=Bodies.circle(100,100,30,ball_options);
  World.add(world,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,15);
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,30,30);

}