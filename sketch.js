var bullet,wall,damage
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 30, 10);
  bullet.shapeColor="white"
  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor="grey"
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(23,83)
  damage =0.5*weight*speed*speed/(thickness*thickness*thickness)
   bullet.velocityX=speed
}

function draw() {
  background("black");  
 if(hascollided(bullet,wall))
{
bullet.velocityX=0
if(damage>10){
  wall.shapeColor="green"
}
if(damage<10){
  wall.shapeColor="red"
}
}

  drawSprites();
}
function hascollided(lbullet,lwall)
{
bulletRightEdge=lbullet.x+lbullet.width
wallLeftEdge=lwall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
else{
  return false
}

}