var bg;
var score=0;
var bgImg;
var bgImg2;

var corona, coronaImg, BC, BCimg;
var coronaGrp, BCG;

var vaccine, vaccineImg;
var vaccineGrp;

var heart;

var girlAnimationM, girlAnimationS;
var girl;

var ground;

var gameState = 0
var v = 255
function preload() {
  
  bgImg= loadImage("images/gameBackground.jpg");
  bgImg2 = loadImage("images/game-background.jpg")

  girlAnimationM = loadAnimation("images/girl1.png","images/girl2.png", "images/girl4.png",
  "images/girl5.png","images/girl6.png","images/girl7.png","images/girl8.png","images/girl9.png",
  "images/girl10.png","images/girl12.png","images/girl3.png","images/girl14.png","images/girl15.png",
  "images/girl16.png","images/girl17.png","images/girl18.png","images/girl19.png","images/girl20.png");

  girlAnimationS = loadAnimation("images/Idle (1).png");

  coronaImg = loadImage("images/greencorona.png");
  vaccineImg = loadImage("images/vaccine.png");
  BCimg = loadImage("images/redcorona.png");

  heart = loadImage("images/healthHeart.png")
  
}

function setup() {
  createCanvas(900,500);

  bg = createSprite(450, 200, 1000, 500);
  bg.addImage(bgImg);
  bg.scale = 2
  
  girl = createSprite(117, 390);
  girl.addAnimation("girl_running", girlAnimationM);
  girl.scale = 0.3;
  
  vaccineGrp = new Group;
  coronaGrp = new Group;
  BCG = new Group;

  ground = createSprite(450, 460, 900, 10);
  ground.visible = false;

}

function draw() {
  background("white");
  drawSprites()
  
  girl.collide(ground)

   
 
  ///console.log(mouseX, mouseY);
  if(gameState === 0){
    
    textSize(30)
    text("Press SPACE to Start!!", 83, 30)
  }
  
  if(keyDown("space") && gameState == 0){
    gameState = 1
    
  }
  
  if(gameState === 1){
   
    if (keyDown("S") && girl.y >385 ){

      girl.velocityY = -20

    }
    v= v-0.5
    push()
    tint(255, v)
    image(heart, 240,25, 60, 60);
    pop()

    girl.velocityY = girl.velocityY + 0.5
    
    bg.velocityX = -4.5;
    if (bg.x <= 0){
      bg.x = 500;
    }

    fill("red")
    textSize(30);
    text("Lives:", 20, 70)
    image(heart, 100,25, 60, 60);
    image(heart, 170,25, 60, 60);
    image(heart, 240,25, 60, 60);

   

    createVaccine()
    
    createEnemy();
    createEnemy2()
    if (girl.isTouching(vaccineGrp)){

      vaccineGrp.destroyEach();

    }

    if (girl.isTouching(coronaGrp) || girl.isTouching(BCG)){
      gameState = 2
      textSize(100);
      text("You are infected :( ", 0, height/2)
    }

  }

  if(gameState === 2){

    if (keyDown("S") && girl.y >385 ){
      girl.velocityY = -20
    }

    v= v-0.5
    push()
    tint(255, v)
    image(heart, 240,25, 60, 60);
    pop()

    girl.velocityY = girl.velocityY + 0.5
    
    bg.velocityX = -4.5;

    if (bg.x <= 0){
      bg.x = 500;
    }

    fill("red")
    textSize(30);
    text("Lives:", 20, 70)
    image(heart, 100,25, 60, 60);
    image(heart, 170,25, 60, 60);

    createVaccine()
    
    createEnemy();
    createEnemy2()

    if (girl.isTouching(vaccineGrp)){
      vaccineGrp.destroyEach();
    }

    if (girl.isTouching(coronaGrp) || girl.isTouching(BCG)){
      gameState = 2;
      textSize(100);
      text("You are infected :( ", 0, height/2)
    }
  }

//       if (gameState === 3){
//    
//       if (keyDown("S") && girl.y > 385){
//   
//       girl.velocityY = -20;
//     
//       }        
//       v = v-0.5
//       push();
//       tint(255, v);
//       image(heart, 170, 25, 60, 60);
//       pop();
//       
//       girl.velocityY = girl.velocityY + 0.5;
//       
//       bg.velocityX = -4.5;
//       if(bg.x <= 0){
//       bg.x = 500;
//       }
//       
//       fill("red");
//       textSize(30);
//       text("Lives:", 20, 70);
//       image(heart, 100, 25, 60, 60);
//       
//       createVaccine();
//       
//       createEnemy();
//       createEnemy2();
//       if(girl.isTouching(vaccineGrp)) {
//         vaccineGrp.destroyEach();
//       }
//       
//       if (girl.isTouching(coronaGrp) || girl.isTouching(BCG)){
//         gameState = 4;
//         textSize(100);
//         text("You are infected :(", 0, height/2);
//       }
//  
//    if (gameState === 4){
//    
//    }
//  
//  
//    
//  }

  
}

function createEnemy(){

  if (frameCount%200 === 0){

    corona = createSprite(1020, 380, 20, 20);
    corona.addImage(coronaImg);
    corona.scale = 0.3;
    corona.velocityX = -6;
    corona.lifetime = 300;

    coronaGrp.add(corona);
  }
}

function createEnemy2(){
  if (frameCount%2057 === 0){

    BC = createSprite(1020, 380, 20, 20);
    BC.addImage(BCimg);
    BC.scale = 0.6;
    BC.velocityX= -7.5;
    BC.lifetime = 300;

    BCG.add(BC);
  }

}

function createVaccine(){

  if (frameCount%138 === 0){

    vaccine = createSprite(1020, 250, 20, 20);
    vaccine.addImage(vaccineImg);
    vaccine.scale = 0.3;
    vaccine.velocityX = -6;
    vaccine.lifetime = 300;

    vaccine.rotation = 80

    vaccineGrp.add(vaccine);

  }
}