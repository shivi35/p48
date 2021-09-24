class Playing{
    constructor(){

    }
start(){
 // background(invisibleGround)
//invisibleGround.visible = true;
//bg1.visible = true;
background(Pbackground1)
ground.visible = true;
Blyth.visible = true  
// if(Blyth!== undefined){
// image(Pbackground1, width*8, 0, width*8,height);
// }
//  camera.position.x = 50
// camera.position.y = Blyth.y  
}
    play(){
 if(gameState === 0){
   
 dog1.visible= true;
 dog2.visible = true;
    }
    
    }
         
 
  
  jump(){
    if(keyDown("space")){
      Blyth.velocityY=-10
      Blyth.addImage(jump)
      Blyth.scale = 0.5
   }

   
   if(keyDown("down")){
    Blyth.velocityY= 4;
   
  }
  if(keyDown("right")){
    Blyth.velocityX= 4;
   
  }

  if(keyDown("left")){
    Blyth.velocityX= -4;
  
  }
  if(keyDown("up")){
    Blyth.velocityY= -4;
  }
   Blyth.velocityY=Blyth.velocityY+0.5
   spawnfriends();
   spawnenemy();
  }
    

//drawSprites();
}
function spawnfriends(){

  if(frameCount%100 ===0){
   var friend = createSprite(displayWidth -100,70,20,20);
   friend.addImage(bone);
   friend.scale = 0.3
   friend.shapeColor= "yellow";
   friend.velocityX =-4
   friend.y = Math.round(random(10,300));
  }
}

function spawnenemy(){

  if(frameCount%150 ===0){
   var friend = createSprite(800,70,20,20);
   friend.shapeColor= "purple";
   friend.velocityX =-7
   friend.y = Math.round(random(20,280));
  }
}