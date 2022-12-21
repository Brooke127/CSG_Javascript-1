
   /*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */
   
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */
  var rooster = [];
  var patroon = [1,0,1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,0,1,
                 1,0,1,0,1,0,1,0,1,0,
                 0,1,0,1,0,1,0,1,0,1];

  var grootte= 50
  
  function preload() {
    achtergrond = loadImage("assets/PrincipioPantalla.jpg");
  }
  
  function setup() {
    canvas = createCanvas(500,500);  //900,600
    canvas.parent('processing');
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(15);
    player = new Hero(0);
    spel = new LaberintoLevels(player,patroon,grootte);
    spel.nieuwSpel();
  }
  
  function draw() {
    spel.update();
    spel.teken();
  }
  
  function mousePressed() {
    if (spel.actief) {
      spel.levelGehaald = true;
      spel.teken();
    }
    if (spel.level>=spel.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }  
    return false;
  }
  
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) { //si usas enter vas al proximo level
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen) && keyCode == 32) { //si spatie nuevo juego? CAMBIA POR FAVOR
      // einde spel
      spel.nieuwSpel();
    }
  }
  
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */