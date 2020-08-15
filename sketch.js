var movingRect, fixedRect;

function setup() {
  createCanvas(1200,800);
  movingRect = createSprite(800,400, 120,50);
  movingRect.shapeColor = "blue";

  fixedRect = createSprite(400,400,50,180);
  fixedRect.shapeColor = "yellow";

}

function draw() {
  background(221); 
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2 &&
    movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 &&
    fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2)
  {
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "green";
  }
else{
  fixedRect.shapeColor = "yellow";
  movingRect.shapeColor = "blue";
}
  


  drawSprites();
}