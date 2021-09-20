const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base, ground;
var backgroundImg, platform;
var ball, rope;
var balls = [];
var ropes = [];

var gameState = "onSling";
var bg = "sprites/bg1.png";
var score = 0;

function preload() {
  backgroundImg = loadImage("building.gif");
}

function setup() {
  var canvas = createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(windowWidth / 2, height, width, 10);
  base = new buildingbase(windowWidth / 2, windowHeight - 50, 400, 80);
}

function draw() {
  background(0);
  for (var i = 0; i < balls.length; i++) {
    showBlocks(balls[i], i);
    showRopes(ropes[i], i);
  }
  noStroke();
  textSize(20);
  fill("white");
  //text("Score  " + score, width - 300, 50);

  text("Press spacebar for new Block  ", 50, 50);
  text("Release mouse to place the Block", 50, 100);

  Engine.update(engine);

  base.display();
  ground.display();
}

function mouseReleased() {
  ropes[ropes.length - 1].fly();
}

function keyPressed() {
  if (keyCode === 32) {
    var block = new Ball(windowWidth / 2 + frameCount / 10, 150, 100, 100);
    balls.push(block);
    rope = new Rope(block.body, { x: windowWidth / 2, y: 20 });
    ropes.push(rope);
  }
}

function showBlocks(ball, index) {
  if (ball) {
    ball.display();
  }
}
function showRopes(rope, index) {
  if (rope) {
    rope.display();
  }
}
