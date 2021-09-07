class Cannon {
  constructor(x, y, width, height, angle) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.angle = angle;
    this.cannonimage=loadImage("assets/canon.png");
    this.cannonBase=loadImage("assets/cannonBase.png")
    
  }

  display(){
    //code to create cannon top
    push ();
    imageMode(CENTER);
    image(this.cannonimage,this.x,this.y,this.width,this.height,this.angle);
    pop ();

    //code to create cannon bottom
    image(this.cannonBase,70,20,200,200);
    noFill();
  }
  
}
