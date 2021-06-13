const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;

var engine,world;
var bgImg;
var snow=[];
var snow1,snow2;

function preload() {
bgImg=loadImage("snow2.jpg");

}

function setup() {
engine=Engine.create();
world=engine.world;
  createCanvas(1200,600);

  if(frameCount % 50 === 0){
    for( var i=0; i<200; i++) {
     snow.push (new createSnow(random(0,1200),random(0,1200)) ); 
  }
}

  //createSprite(400, 200, 50, 50);
}

function draw() {
  
  background(bgImg);  
  Engine.update(engine);
  for (var i=0; i<200; i++){
   snow[i].showDrop();
   snow[i].updateY();
  }
  

  drawSprites();
}