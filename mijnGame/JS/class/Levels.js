    class Levels {
      constructor(s,b) {
      this.speler = s;
      this.berg = b;
      this.level = null;
      this.maxLevel = 3;
      this.actief = null;
      this.levelGehaald = null;
      this.afgelopen = null;
      this.gewonnen = null;
      this.alfa = 0.5;
    }
    
    nieuwSpel() {
      this.level = 0;
      this.actief = false;
      this.gewonnen = false;
      this.afgelopen = false;
      this.nieuwLevel();
    }
  
    nieuwLevel() {
      this.level++;
      this.levelGehaald = false;
    }
  
    update() {
      this.alfa += random(-3,3) / 100;
      if (this.alfa <= 0 || this.alfa >=1) {
          this.alfa = 0.5;
      }
      this.speler.verwerkInvoer();
    }
  
     tekenSpelToestand() {
      push();
      noStroke();
      fill(120,130,150,this.alfa);
      rect(10,10,880,580);
      pop();
      this.speler.teken();
      this.berg.teken();
    }
  
    tekenScorebord() {
      push();
      fill(0,0,0,.8);
      noStroke();
      textSize(30);
      var marge = 100;
      rect(marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);
      fill(255);
      text(" Dit is Level "+this.level+"\nHet spel is actief.\n\nKlik om het level te \"halen\".",marge,marge,canvas.width - 2 * marge,canvas.height - 2 * marge);   
      pop();
    }
    
    beginScherm() {
      push();
      noFill();
      stroke(25,25,112,.7);
      strokeWeight(3);
      textSize(100);
      text(" Zelda Parkour",20,0,canvas.width,canvas.height * 1 / 4);
      textSize(32);
      strokeWeight(2);
      fill(0,0,0,0);
      text("Welkom bij Zelda Parkour \n JE kan met wasd en met de pijlen bewegen. \n met SPATIE schiet je. \n Klik op X om te beginnen\n",0,canvas.height * 1 / 3,canvas.width,canvas.height * 1 / 3);
      pop();
    }
  
    levelScherm() {
      push();
      fill(50,80,80,.5);
      stroke(150,200,255,.7);
      strokeWeight(3);
      text('Gefeliciteerd!\nJe hebt level '+this.level+' gehaald!\n\nDruk ENTER om naar level '+(this.level+1)+' te gaan.',0,0,canvas.width,canvas.height / 2);
      pop();
    }   
  
    eindScherm() {
      var tekst = 'Je hebt het gehaald.';
      if (this.gewonnen) {
        tekst = 'Gefeliciteerd!';
      }
      push();
      fill(0);
      stroke(100,75,50,.8);
      strokeWeight(3);
      text(tekst + '\n\nDruk SPATIE voor nieuw spel.',0,0,canvas.width,canvas.height);
      pop();
    }    
    
    teken() {
      background(achtergrond);
      if (!this.actief) {
          if (this.afgelopen) {
              this.eindScherm();
          }
          else {
              this.beginScherm();
          }
      }
      else {
          if (this.levelGehaald) {
              this.levelScherm();
          }
          else {
              this.tekenScorebord();
              this.tekenSpelToestand();
          }
      }
    }
  }