var dog;
var bg1;
var Blyth;
var dogimg;
var dog2;
var dog2img;
var Pgrass1
var Pbackground1;
var hellbg;
var hellbgimg;
var playing;
var  invisibleGround;
var gameState = 0;
var ground;
var bone;
function preload(){

  Pgrass1=loadImage("images/grass1.jpg")
  dogimg=loadImage("images/Husky.png")
  dog2img=loadImage("images/evil Husky.png")
  hellbgimg=loadImage("images/hellbg.jpg")
  Pbackground1=loadImage("images/paradise1.jpg")
  sit = loadImage ("images/sitting.jpg");
  jump = loadImage("images/jumping.jpg");
  bone = loadImage("images/bone.jpg");
  DOG1 = loadAnimation("images/DOG1"," DOG2.jpeg","DOG3.jpeg","DOG4.jpeg","DOG5.jpeg","DOG6.jpeg","DOG7.jpeg","DOG8.jpeg")
 

}

function setup() {

  createCanvas(displayWidth-60,displayHeight-100);
  background(Pgrass1); 
  
  dog1 = createSprite(displayWidth/2-180, displayHeight-400, 50, 50);
  dog1.addImage(dogimg);
  dog1.visible = false;

  dog2 = createSprite(displayWidth/2+200, displayHeight-400, 50, 50);
  dog2.addImage(dog2img)
  dog2.visible = false;
  
// bg1=createSprite(400,340,800,10) ;
 //  bg1.visible = false;
// bg1.velocityX= -3;
//bg1.addImage(Pbackground1)
  // bg1=createSprite(0,0,800,400);
  // bg1.visible = false;
  // bg1.velocity = -4;
   ground = createSprite(400,390,800,20);
  ground.visible = false;
  //ground.addImage(Pbackground1);
  Blyth=createSprite(displayWidth/2,displayHeight/2-300, 20,20); 
  Blyth.addImage(sit);
  Blyth.scale = 0.3
  Blyth.visible = false
    //   bg1.scale=2
    //  bg1.addImage(Pbackground1)
  button=new Button();
  playing=new Playing();





}


function draw() {
//background(255)
  button.display()
  playing.play();
 // bg1.visible = true;
//Blyth.collide(bg1)
if(gameState===1){
clear();

//bg1.visible= true;
 //invisibleGround.visible =true;

 playing.start();


 // Blyth.collide(invisibleGround)
    //   if(invisibleGround.x<0){
    // invisibleGround.x =invisibleGround.width/2
    //    }
playing.jump()
}

// playing.jump();
  drawSprites();
}