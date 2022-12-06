class Hero {
  constructor(x,v){
    this.l = 50;
    this.stap = 5;
    this.x = x;    
    this.y = null;
    this.g = 0,5;
    this.kleur = null; //GEts indicated in the standingon function
    this.snelheid = 0;
    this.aanHetSpringen = false;
    this.springSnelheid = v;
  }

  verwerkInvoer(){
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){     // naar links bewegen
      this.x -= this.stap;
    }
    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){    // naar rechts bewegen
      this.x += this.stap;
    }    
  
    if (keyIsDown(32) || keyIsDown(87)) {            
      this.spring();
    }

    //if (keyIsDown(UP_ARROW)){
   //   this.y -= this.stap;
   // }

   // if (keyIsDown(DOWN_ARROW)){
   //   this.y += this.stap;
   // }

   // this.straal = this.l /= 2; 
    this.x = constrain(this.x, 0, canvas.width - this.l);
  //  this.y = constrain(this.y, 0, canvas.heigt - this.l);
  
  } 

  spring() {
    if (!this.aanHetSpringen) {
      this.aanHetSpringen = true;
      this.snelheid = -this.springSnelheid;
    }
  }




  
 // standon(){
   // var standingon = false;
    

   // if (standingon) {
   //   this.kleur = 'aquamarine';
   // }
   // else {
  //    this.kleur = 'turqouise';
   // }
   // return standingon;
  // }



  teken() {
    push();
    noFill();
    stroke(this.kleur);
    strokeWeight(5);
    ellipse(this.x+this.l/2, this.y+this.l/2 ,this.l);
    pop();
  }
}