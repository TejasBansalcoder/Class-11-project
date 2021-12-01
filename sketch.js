var ground
var trex ,trex_running;
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png")

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(100,173,10,10)
 trex.addAnimation("running",trex_running)
trex.scale = 0.5 
ground = createSprite(300,190,600,5)

}

function draw(){
  background("white")
 trex.collide(ground) 
if(keyDown("space")){
trex.velocityY = -5
}
trex.velocityY = trex.velocityY+0.8


drawSprites()
}

