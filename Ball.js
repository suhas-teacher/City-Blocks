class Ball {
  constructor(x, y, width, height) {
    var options = {
      isStatic: true,
      airFriction: 1,
      restitution: 0.8,
    };
    // this.speed = 0.05;
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.image = loadImage("block.gif");
    World.add(world, this.body);
  }

  display() {
    var angle = this.body.angle;
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
