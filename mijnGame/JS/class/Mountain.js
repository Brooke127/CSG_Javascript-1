class Mountain{
  constructor(x,y,l,b){
    this.x = x;     //x-waarde
    this.y = y;     //y-waarde
    this.l = l;     //hoogte/lengte van blok
    this.b = b;     //breedte van blok
  }

  teken(){
    push();
    fill('grey');
    this.h = canvas.height - this.l;
    rect(this.x,this.y,this.b,this.h);
  }
}