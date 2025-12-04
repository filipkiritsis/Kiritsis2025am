let x = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(180, 200, 255);
  fill(255, 100, 100);
  ellipse(x, 200, 80, 80);
  x = x + 2;
  if (x > 400) {
    x = 0;
  }
}