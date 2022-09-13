var kever;
var keverX;
var keverY;

function preload() {
  kever = loadImage("images/sprites/kever.png");
}

function setup() {
  canvas = createCanvas(450,450);
  canvas.parent('processing');
  keverX = 20;
  keverY = 20;
  //noLoop();
}

function draw() {
  //noStroke();
  background('grey');
  for (var n = 1;n <= 20;n++) { 
  image(kever,0,0,40,40); 
  translate(45,45) 
  } 
  //for (var n = 1;n <= 10;n++) { 
  //image(kever,0,0,40,40); 
  //translate(45,0) 
  //  } 
 // image(kever,100,100);
 
  
  //fill('steelblue');
  //ellipse(0,0,800);
  //fill('deepskyblue');
  //ellipse(450,450,400);
}