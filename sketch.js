const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var walkingMan
var drop = [];

function preload(){
  batmanimation = loadAnimation("Walking Frame/walking_8.png","Walking Frame/walking_7.png","Walking Frame/walking_6.png","Walking Frame/walking_5.png","Walking Frame/walking_4.png","Walking Frame/walking_3.png","Walking Frame/walking_2.png","Walking Frame/walking_1.png");
  thundermation = loadAnimation("thunderbolt/1.png","thunderbolt/4.png","thunderbolt/3.png","thunderbolt/2.png")
  street = loadImage("others/street2.png");
  drop1 = loadImage("others/drop1.png");
}

function setup() {
    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

  createCanvas(500,900);

   walkingMan = createSprite(250, 640, 50, 50);
   walkingMan.addAnimation("batmanimation",batmanimation);
   walkingMan.scale = 0.59;

  thunderbolt = createSprite(250,150,20,20);
  thunderbolt.addAnimation("thundermation",thundermation)
  thunderbolt.scale = 0.6

  brella = new Umbrella(270,480,100,40);
  brella1 = new Umbrella(230,510,100,10);

}

function draw() {
  background(street);  

  if(frameCount%5 === 0){
    drop.push(new Drop(random(width/2-300,width/2+300),-10,10))
  }
  if(frameCount%5 === 0){
    drop.push(new Drop(random(width/2-300,width/2+300),-40,10))
  }
  for (var s = 0; s < drop.length; s++) {
    drop[s].display();
  }
  drawSprites();
}