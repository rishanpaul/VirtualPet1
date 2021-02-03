//Create variables here
var dogHappy, dog;
var database;
var foodS, foodStock

function preload()
{
  //load images here
  dogImage = loadImage("images/dogImg.png");
  dogHappyImage = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(800, 700);
  dog = createSprite(400,400,50,20);
  dog.scale = 0.25;
  dog.addImage(dogImage);
  database = firebase.database();
  foodStock = database.ref("Food");
    foodStock.on("value", readStock);
}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){
  if(x <= 0){
    (x=0);
  }
  else {
    x = x-1;
  }
  database.ref('/').update({
    Food: x
  })
}

function draw() {  
  background(46, 139, 87)
  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(dogHappyImage);
  }
fill(255,255,254);
stroke("black");
text("Food remaining : "+foodS,170,200);
textSize(13);
text("Note: Press UP_ARROW Key To Feed Drago Milk!",130,10,300,20);

  drawSprites();
  //add styles here

}



