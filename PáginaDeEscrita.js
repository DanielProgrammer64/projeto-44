//var Space
//////////////////////
var Owen;
var enemyBoss;
var enemy1,
enemy2,
enemy3,
enemy4,
enemy5,
enemy6,
enemy7;
var backgroundImg;
var Canvas

var invisibleGround, ground;
////////////////////////

function preload(){
backgroundImg = loadImage("M.png");
Owenimg = loadImage("icon_12.png");
}
//////////////////

function setup(){
Canvas = createCanvas(1600, 1260);
Owen = createSprite(100,150,10,10);
Owen.addImage("Owenimg", Owenimg)
Owen.scale = 0.8;

ground = createSprite()
//ground.addImage()
ground.x = ground.width /2;
ground.velocityX = +12;

invisibleGround = createSprite();

}
/////////////////////////

function draw(){
image(backgroundImg,0, 0, 1280, 1280);

//if(keyIsDown(LEFT_ARROW)){
//Owen.position.x = Owen.position.x -5;
//}
//if(keyIsDown(RIGHT_ARROW)){
//Owen.position.x = Owen.position.x +5;  
//}
//if(keyIsDown(DOWN_ARROW)){
//Owen.position.y = Owen.position.y +5;    
//}
//if(keyIsDown(UP_ARROW)){
//Owen.position.y = Owen.position.y -5;    
//}

if(keyIsDown(UP_ARROW) && Owen.y >= 159) {
    Owen.velocityY = -12;
  }

  if (ground.x < 0){
    ground.x = ground.width/2;
  }

Owen.collide(invisibleGround);


drawSprites();    
}

