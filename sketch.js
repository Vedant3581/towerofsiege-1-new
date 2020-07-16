const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,slingshot,stand;



function setup() {
 var canvas = createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  ground = new Ground(400,390,800,20);
  stand = new Ground(150,200,350,20);

  box1 = new Box(330,300,70,70);
  box2 = new Box(360,300,70,70);
  box3 = new Box(390,300,70,70);
  box4 = new Box(420,300,70,70);
  box5 = new Box(450,300,70,70);

  box6 = new Box(360,300,70,70);
  box7 = new Box(390,300,70,70);
  box8 = new Box(420,300,70,70);

  box9 = new Box (390,300,70,70);

  polygon = Bodies.circle(50,200,20);
  World.add(world,polygon);
  
  slingshot= new Slingshot(polygon.body,{x:100,y:200});
}

function draw() {
  background(255,255,255);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  stand.display();
  slingshot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}