const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
bg = loadImage("snow2.jpg");
}
var snow = []
function setup() {
  createCanvas(800,400);
  
  engine = Engine.create();
	world = engine.world;

}

function draw() {
  background(bg);
  Engine.update(engine);  
  drawSprites();

if(frameCount%60===0){
  snow.push(new Snow(random(width/2-100, width /2+100), 10, 10));
}

for (var j = 0; j < snow.length; j++) {
   snow[j].display(); 
}
}
