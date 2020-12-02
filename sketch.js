const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;



 







function setup() {
  createCanvas(480,800);
  
  engine = Engine.create();
  world = engine.world;
  ground=new Ground(240, 500, 480, 50);
  div=new Divi(240, 500, 50, 480);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}