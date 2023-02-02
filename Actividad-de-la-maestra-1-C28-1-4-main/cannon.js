class Cannon{
constructor (x,y,width,height){
this.x=x;
this.y=y;
this.width=width;
this.height=height;
this.angle=angle;
//this.Image=loadImage("./assets/CANON.png");
this.base=loadImage;

}


display(){

 push();
 ImageMODE(CENTER);
 traslate(this.x, this.y);
 (this.angle); 
 rect(-10,-20,this.width, 
this.height); 
pop();
 arc(this.x-40, this.y+80, 180,230, PI, TWO_PI);
  nofill(); 
}

}

