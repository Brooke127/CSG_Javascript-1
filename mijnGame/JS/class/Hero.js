class Hero {
  constructor(x){
    this.l = 50;
    this.stap = 50;
    this.x = x;   
    this.y = canvas.height/2;
    this.g = 0,5;
    this.kleur = 'Aquamarine'; 
  }

  aangeraakt(x,y) {
    if (dist(x,y,this.x + this.l/2,this.y + this.l/2) < this.l / 3) {
      return true;
    }
    else {
      return false;
    }
  }

  verwerkInvoer(){
    if (keyIsDown(LEFT_ARROW) || keyIsDown(65)){     // naar links bewegen
      this.x -= this.stap;
    }

    if (keyIsDown(RIGHT_ARROW) || keyIsDown(68)){    // naar rechts bewegen
      this.x += this.stap;
    }    
  
    if (keyIsDown(UP_ARROW) || keyIsDown(87)) {      // naar boven bewegen     
      this.y -= this.stap;

    }
    
    if (keyIsDown(DOWN_ARROW) || keyIsDown(83)) {     // naar beneden bewegen         
      this.y += this.stap;

    }
   
    this.x = constrain(this.x, 0, canvas.width - this.l); //hero is always visible and can't hide
    this.y = constrain(this.y, 0, canvas.height - this.l); //hero is always visible and can't hide
  } 


  teken() {
    push();
      noStroke();
      fill(this.kleur);
      ellipse(this.x+this.l/2, this.y+this.l/2 ,this.l);
    pop();
  }
}