class Rope {
  constructor(bodyA, pointB) {
    var options = {
      bodyA: bodyA,
      pointB: pointB,
      stiffness: 0.04,
      length: 10,
    };
    this.pointB = pointB;
    this.sling = Constraint.create(options);
    World.add(world, this.sling);
  }
  attach(body) {
    this.sling.bodyA = body;
  }

  fly() {
    Matter.Body.setStatic(this.sling.bodyA, false);
    console.log("fly called");
    // Matter.Body.setVelocity(this.sling.body, {
    //  y: 1,
    //});
    this.sling.bodyA = null;
  }

  display() {
    if (this.sling.bodyA) {
      var pointA = this.sling.bodyA.position;
      var pointB = this.pointB;
      push();

      stroke(255);
      line(pointA.x, pointA.y, pointB.x, pointB.y);
      pop();
    }
  }
}
