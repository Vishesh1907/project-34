var dog,dogimage;
var happyDog,happydogimage;
var database;
var foodS;
var foodStock;
//Create variables here

function preload()
{
  dogimage = loadImage("images/dogImg.png");
  happyDogimage = loadImage("images/dogImg1.png");
	//load images here
}

function setup() {
  database=firebase.database();
	createCanvas(500, 500);
  dog = createSprite(100,200,100,350);
  dog.addImage(dogimage);
  dog.scale=0.2
foodStock = database.ref('Food');
foodStock.on("value",readStock);
textSize(15);
}



function draw() {  
background(46,139,87);
if (keyWentDown(UP_ARROW)){
  writeStock(foodS)
  dog.addImage(happyDogimage);
}
  drawSprites();
  //add styles here

fill("black")
noStroke();
text("food remaining "+ foodS,150,200)
textSize(15);
text("press up arrow to feed milk",130,10,300,20);
}

function readStock(data){
  foodS = data.val();
}
function writeStock(x){
  if(x<=0){
x = 0
  }else{
   x= x-1
  }
  
  database.ref('/').update({
    Food:x
  })
}


