class Paredes{ //muren, rare naam, misschien nog veranderen naar iets met cell.
  constructor(x,y,l){
    this.x = x;     //x-waarde
    this.y = y;     //y-waarde
    this.l = l;     //hoogte/lengte van blok
    this.kleur = 0 //kleur hier invoeren voor de paredes
  }

  wordtGeraakt(s) {
    if (s.x + s.l > this.x && s.x < this.x + this.l && s.y + s.l > this.y && s.y < this.y + this.l) {
      if (this.kleur == 0) {
        return true;
      }
    }
    return false;
  }

  teken(){
    push();
      fill(this.kleur);
      rect(this.x,this.y,this.l,this.l);
    pop();
  }
}