
var mario, marioSImg, marioRImg;
var iG;
var gameState = "play";
var moving = false;





function preload(){
  marioSImg = loadAnimation("th.png");
  marioRImg = loadAnimation("th (2).png", "th (1).png");
}

function setup() {
  createCanvas(600, 600);
  mario = createSprite(300,400);
  
  mario.scale = 0.4;
  
  iG = createSprite(300, 550,800,50);
  iG.shapeColor = "red";
  iG.debug = true;

  mario.setCollider("rectangle", -75, 20, 100, 180);
  

}

function draw() {
  background(0);

  if(mario.isTouching(iG)){
    mario.velocityY = -0.5;
  }
  if(gameState === "play"){
    
  
    if(moving == false  ){
      mario.addAnimation("MarioStanding", marioSImg);
      console.log("stANDING");

    }
    if(moving == true ){
      
      mario.addAnimation("MarioRunning", marioRImg);
      console.log("running");
  }


  if(keyDown(RIGHT_ARROW)){
    mario.x += 3;
    moving = true;
    
    
  }
  if(keyDown(LEFT_ARROW)){
    mario.x -= 3;
    moving = true;
    
    
    
  }
  if(keyDown(DOWN_ARROW)){
    moving = false;
    
  }
  
  
  if(keyDown("space")){
    mario.velocityY = -5;
  }
  mario.velocityY += 0.5;

  







    drawSprites(); 
 }

   
 
}



