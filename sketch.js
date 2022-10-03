var block, ground;
var blockIMG1,blockIMG2, backgroundIMG;

function preload(){
blockIMG1 = loadAnimation("knight1.png");
blockIMG2 = loadAnimation("knight2.png");
backgroundIMG = loadImage("background.webp");
}

function setup() {
  createCanvas(800,400);
  block = createSprite(400, 200, 50, 50);
  block.addAnimation("idle1", blockIMG1);
  block.addAnimation("idle2", blockIMG2);
  ground = createSprite(400, 320, 800, 20);
  ground.visible = false;
}

function draw() {
  background(backgroundIMG);  
  drawSprites();
  block.collide(ground);
  block.velocityY = block.velocityY + 0.5;
  /*if(keyDown("Left_Arrow")) {
    block.changeAnimation("idle2")
    block.position.x = block.position.x-5
  }
  if(keyDown("Right_Arrow")) {
    block.changeAnimation("idle1")
    block.position.x = block.position.x+5
  }
  if(keyDown("space")){
    block.velocityY = -10 
  } */
}