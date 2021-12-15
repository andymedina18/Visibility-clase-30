class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");

    this.visibility = 255;
  }

  display() {

    
    if (this.body.speed < 3) {
      super.display();

    } else {
      //Accede a las propiedades
      World.remove(world, this.body);
      
      //Push y pop para hacer el cambio solo aquí
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      image(this.image, this.body.position.x, this.body.position.y, 50, 50);
      pop();

    }

  }

}