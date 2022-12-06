
   /*  **********************************************************
    **             BEGIN klasse Spel met Levels             **
    ********************************************************** */


   
  
  /*  **********************************************************
      **  EINDE klasse Spel met Levels  BEGIN hoofdprogramma  **
      ********************************************************** */
  
  
  function preload() {
    achtergrond = loadImage("assets/beginscherm.jpg");
  }
  
  function setup() {
    canvas = createCanvas(900,600);
    canvas.parent('processing');
    colorMode(RGB,255,255,255,1);
    textFont("Monospace");
    textSize(44);
    textAlign(CENTER,CENTER);  
    frameRate(50);
    hero = new Hero(400,3);
    mountain = new Mountain(200,300,30,50);
    spel = new Levels(hero,mountain);
    spel.nieuwSpel();
  }
  
  function draw() {
    spel.update();
    spel.teken();
   // mountain.teken();
  }
  
  function mousePressed() {
    if (spel.actief) {
      spel.levelGehaald = true;
    }
    if (spel.level>=spel.maxLevel) {
      spel.afgelopen = true;
      spel.gewonnen = true;
      spel.actief = false;
    }  
  }
  
  function keyTyped() {
    if (!spel.actief && !spel.levelGehaald) {
      // begin spel
      spel.actief = true;
    }
    if ((spel.levelGehaald && !spel.afgelopen) && keyCode == ENTER) {
      // level gehaald tijdens het spel
      spel.nieuwLevel();
    }
    if ((spel.afgelopen) && keyCode == 32) {
      // einde spel
      spel.nieuwSpel();
    }  
  }
  
  /*  **********************************************************
      **               EINDE hoofdprogramma                   **
      ********************************************************** */