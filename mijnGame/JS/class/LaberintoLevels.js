  class LaberintoLevels {
    constructor(s, patroon, grootte) {
    this.parcours = this.maakParkours(patroon,grootte);
    this.speler = s;
    this.actief = null;
    this.level = null;
    this.levelGehaald = null;
    this.gewonnen = null;
    this.randomSpotX = round(random(0,9))*50;
    this.randomSpotY = round(random(0,9))*50;
      // this.afgelopen = null;  niet meer van toepassing
      //  this.maxLevel = null;  niet meer van toepassing
  }
    
  maakParkours(patroon,grootte){
    var rooster = [];
    for (var rij = 0; rij < canvas.height / grootte; rij++) {
      for (var kolom = 0; kolom < canvas.width / grootte; kolom++) {
        rooster.push(new Paredes(kolom*grootte,rij*grootte,grootte));
      }
    }
    for (var c = 0; c < rooster.length; c++) {
      if (patroon[c] == 1) {
        rooster[c].kleur = 255;
      }
    }
    return rooster;
  }

  beginScherm() {  
    image(achtergrond,0,0,canvas.width,canvas.height);
    push();
      fill('white');
      stroke('LightSteelBlue');
      push();
        strokeWeight(13);
        textSize(100);
        text(" Zelda Parkour",100,80,canvas.width,canvas.height * 1 / 4);
      pop();
      push();
        strokeWeight(3);
        textSize(23);
        text("Welkome to Zelda Parkour \n This is an endless game...\n PERFECT for when you are procrastinating \n You can move around with WASD \n or with the arrows\n Find the circle and stand in it \n and push ENTER to go on!\n",0,canvas.height * 2 / 5 ,canvas.width);
      pop();
    pop();
  }

  //eindScherm() {    //functie is niet van toepassing, gezien het een eindeloos spel is. Maar wel belangrijk om te laten zien.
  //  var tekst = 'Je hebt het gehaald.';
  //  if (this.gewonnen) {
  //    tekst = 'Gefeliciteerd!';
  // }
  // push();
  //   fill(0);
  //   stroke(100,75,50,.8);
  //    strokeWeight(3);
  //   text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
  // pop();
  // }    

    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
    //  this.afgelopen = false; niet meer van toepassing
      this.nieuwLevel();
    }
  
  nieuwLevel() {
    this.level++;
    this.levelGehaald = false;
    this.randomSpotX = round(random(0,9))*50;
    this.randomSpotY = round(random(0,9))*50;
  }
  
  update() {
    this.speler.verwerkInvoer();
    if(this.speler.x == this.randomSpotX && this.speler.y == this.randomSpotY){
      this.levelGehaald = true;
    }
  }
  
  tekenSpelToestand() {
    push();
      noStroke();
      fill(120,130,150);
      rect(10,10,880,580);
    pop();
    this.speler.teken();
    this.berg.teken();
  }
  
  tekenScorebord() {
    push();
      fill(0,0,0);
      noStroke();
      textSize(20);
      rect(0,150,canvas.width,200);
      fill(255);
      text("Level = "+this.level+" and Score = "+this.level+"\n Find the circle and go in it! \nPress ENTER when you're in the circle!\n Click with the mouse to make this textbox go away! \n Now go play!",0,200,canvas.width);   
    pop();
  }
    
    
  levelScherm() {  //niet echt meer van toepassing
    push();
    //fill(50,80,80,.5);
    //stroke(100,150,200,.7);
    //strokeWeight(3);
    //text('Good job!\nYou made it throught hallway '+this.level+'! \n\n Press ENTER to go to hallway '+(this.level+1)+' \n if you are done resting. ',0,0,canvas.width,canvas.height / 2);
    pop();
  }   
  

  teken() {
    if (!this.actief) {
     // if (this.afgelopen) { niet meer van toepassing gezien ik geen einde heb
     //   this.eindScherm();
     // }
     // else {
        this.beginScherm();
     // }
    }
    else {
      for (var r = 0; r < this.parcours.length; r++) {
        this.parcours[r].teken();
      }
    this.speler.teken();
    if (this.levelGehaald == true){
      this.levelScherm();
    }
    else{
     this.tekenScorebord();
    }
  }
    push();
      stroke('grey');
      strokeWeight(2);
      noFill();
      ellipse(this.randomSpotX+25,this.randomSpotY+25,50);
    pop();
    }
  }
