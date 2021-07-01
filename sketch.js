var box;


function setup() {
  createCanvas(500,500);
  box=createSprite(250,250,50,50)
  box.shapeColor="black"
}

function draw() 
{
  background("aqua");

if(keyIsDown(RIGHT_ARROW)){

box.position.x+=4


}
if(keyIsDown(LEFT_ARROW)){

  box.position.x-=4
  
  
  }

  if(keyIsDown(UP_ARROW)){

    box.position.y-=4
    
    
    }

    if(keyIsDown(DOWN_ARROW)){

      box.position.y+=4
      
      
      }
drawSprites()
}




