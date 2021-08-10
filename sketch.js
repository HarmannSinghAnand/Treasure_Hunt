var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("Bg.webp");
 bg2 = loadImage("Trophy.jpeg");
}

function setup() {
  createCanvas(1200,800);
  system = new System()
  security = new Security()
}

function draw() {
 background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen
  fill("black")
  textSize(30);
  text("SCORE:" +score, 470,50);

  // Add code to display the end screen
if(score === 3){
   clear()
   background(bg2)
   fill("black")
   textSize(40);
   text("TREASURE UNLOCKED !!!", 150,250);
 }
  drawSprites();
}