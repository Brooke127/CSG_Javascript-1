var animatie = [];
var aantalBeeldjes = 6;
var nummer = 5;

function preload() {
  for (var b = 0;b < aantalBeeldjes;b++) {
    nieuw_beeldje = loadImage("images/sprites/Jos_losse_beeldjes/Jos-" + b + ".png");
    animatie.push(nieuw_beeldje);
  }
}

function setup() {
  canvas = createCanvas(460,460);
  canvas.parent('processing');
  noStroke();
  frameRate(50);
}

function draw() {
  background('lavender');
  image(animatie[nummer],0,0);
  if( mouseX > 306){
   nummer = 4;
  }
  else if (mouseX < 153){
    nummer = 3;
  }
  else {
    if ( mouseY < 153){
    nummer = 1;
    }
    else if ( mouseY > 306) {
      nummer = 0;
    }
    else {
      nummer = 5;
    }
  }
  // straal van de neus is 180

}