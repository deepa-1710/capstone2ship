var PLAY = 1;
var END = 0;
var gameState = PLAY;

var skybg, waterbg, shipimg, helicopterimg, bombimg;
var water, ship, helicopter, bomb;
var helicopterGroup, bombGroup;
var score = 0;


function preload(){
  skybg = loadImage("skybg.jpg");
  waterbg = loadImage("waterbg.png");
  shipimg = loadAnimation("ship.png","ship2.png","ship.png");
  helicopterimg = loadImage("helicopter.png");
  bombimg = loadImage("bomb.png");
  gameover=loadImage("gameOver.png");
  sound1=loadSound("sound1.wav");
  sound2=loadSound("sound2.wav");
}
function setup() {
    createCanvas(800, 450);
    
    //creating water ground
   water=createSprite(300,350);
   water.addImage(waterbg);
   water.velocityX=4;
    //creating ship
    ship = createSprite(200,310,100,100);
 //ship=createSprite(260,500,100,100);
 ship.addAnimation("shiping",shipimg);
 ship.scale=0.3;
 //ship.addAnimation("shipgoing",shipimg);
 //creating helicopter group
 helicopterG=new Group();
 bombG=new Group();



 
  
   
}  
function draw(){

    background(skybg);
  fill("yellow")
  textSize(15);
  text("SURVIVAL TIME: "+ score, 600,30);
 
  drawSprites();

  if(water.x > 500 )
  {
    water.x = width/2;
    
  }
  
  if(keyDown("RIGHT_ARROW"))
  {
    ship.x=ship.x+10;
  }
  if(keyDown("LEFT_ARROW"))
  {
    ship.x=ship.x-10;
  }
  spawnHelicopter();
  
  spawnBomb();
  if(gameState === PLAY){
    //increase score
    score = score + Math.round(frameCount/300);
   

    
    //Call user defined function
   
   if(bombG.isTouching(ship)){
    
    
      gameState = END;
  }
 

  }
  if(gameState == END){
    
   
   //water velocity becomes zero
   water.velocityX=0;

   //destroy Helicopter group
   helicopterG.destroyEach();

   //destroy bomb group
   bombG.destroyEach();
   ship.destroy();//
   gover=createSprite(400,200,100,100);
   
   gover.addImage(gameover);
  // playSound("")
  
    
  }
}
 
  
function spawnHelicopter(){
  if(frameCount%100 === 0){
    helicopter = createSprite(800,80,200,100);
    helicopter.addImage("helicopter",helicopterimg);
    helicopter.setVelocity(-10,0);
    helicopter.scale=1;
    
    helicopterG.add(helicopter);
  }
}
function spawnBomb(){
  // create bombs at random position
  if(frameCount%100 === 0){
    var bomb = createSprite(Math.round(random(40, 700)),40, 10, 10);
  bomb.addImage("bombb",bombimg);
  bomb.setVelocity(0,10);
  bomb.scale=0.1;
  bomb.lifetime = 600;
  bombG.add(bomb);
  }
 
 
  
  //use Math.random
 }
 