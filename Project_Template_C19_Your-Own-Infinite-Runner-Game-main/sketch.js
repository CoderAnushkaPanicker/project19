var girl,zombie,log1
var girlImg,zombieImg,logImg,gameOverImg

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
 girlImg = loadImage("Girl.png");
 zombieImg = loadImage("Zombie.png");
 logImg = loadImage("Log.PNG"); 
 snowImg = loadImage ("Snow.PNG");
 gameOverImg =loadImage("Game Over.png");
}

function setup(){

createCanvas(600,200);

girl=createSprite(70,580,20,20);
girl.addAnimation("SahilRunning",girlImg);
girl.scale=0.08;

zombie = createSprite(70,580,20,20);
zombie.addAnimation(zombieImg);
zombie.scale=0.08;

snow=createSprite(200,200);
snow.addImage(snowImg);
snow.velocityY = 4;

var rand = Math.round(random(1,100))
console.log(rand);
}

function draw(){

//if(gameState===PLAY)
background(0);

console.log(girl.y)
// jump when the space key is pressed
if(keyDown("space")&& girl.y>= 100){
girl.velocityY = -10;
}
girl.velocityY = girl.velocityY + 0.5;
 
girl.collide();
drawSprites();

girl.y=World.mouseY;
girl.x=World.mouseX;
  
edges= createEdgeSprites();
girl.collide(edges);

if(snow.y > 400 )
snow.y = height/2;

sitlog();

}

function sitlog(){ 
if(frameCount%60===0){
log1 = createSprite(600,165,10,40);
log1.velocityX = -6;
log1.addImage(logImg);
log1.x=Math.round(random(10,60));
log1.scale = 0.5;
log1.lifetime = 300;

}
}