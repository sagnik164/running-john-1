var john1_animation,john1;
var backgroundImage,stone,stone_image,back;
var tree,tree_image;
var invisibleground;
var play = 1 ;
var END = 0 ;
var gameState = play;
var score = 0 ;

var gameOver, restart;

localStorage["HighestScore"]= 0;


function preload(){
  john1_animation=loadAnimation("john 1.png","john 2.png");
  backgroundImage=loadImage("background.jpg");
  tree_image=loadImage("tree.png");
  stone_image=loadImage("stone.png");
}

function setup() {
  createCanvas(600,400);
  back=createSprite(400, 200, 50, 50);
  back.addImage(backgroundImage);

  back.velocityX=-(5+3*score/100);

  //gameOver =  createSprite(300,200);

 // restart = createSprite(300,150);


  john1=createSprite(40,350,20,20);
  john1.addAnimation("running",john1_animation);

  invisibleground=createSprite(300,390,600,5)
  invisibleground.visible=false;

score = 0;
}


function draw() {
  background(255,255,255); 
  text("score"+score,500,50) ;
if(back.x<0){
  back.x=400
}
if(keyDown(UP_ARROW)){
  john1.velocityY=-10;

}
john1.velocityY=john1.velocityY+0.8;

john1.collide(invisibleground);
  drawSprites();
}