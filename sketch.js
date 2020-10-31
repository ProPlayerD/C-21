var fixedrect,movingrect,rect2
var moving,hitting

function setup() {
  createCanvas(900,600);
  fixedrect = createSprite(600, 400, 50, 80);
  movingrect = createSprite(400, 200, 80, 30);
  rect2 = createSprite(200,200,50,80);
  moving = createSprite(400,100,50,80);
  hitting = createSprite(400,600,80,30);

  movingrect.shapeColor = "green";
  fixedrect.shapeColor = "green";
  rect2.shapeColor = "green";
  moving.shapeColor = "red";
  hitting.shapeColor = "red";

  moving.velocityY = 5;
  hitting.velocityY = -5;
}

function draw() {
  background("pink");  

  movingrect.x = mouseX
  movingrect.y = mouseY

  console.log(movingrect.x-fixedrect.x);

  if(isTogether(movingrect,rect2) == true){
    movingrect.shapeColor = "blue";
    rect2.shapeColor = "blue";
  }
  else{

    movingrect.shapeColor = "green";
    rect2.shapeColor = "green";

  }

  bounceOff(hitting,moving);
 
  drawSprites();
}

