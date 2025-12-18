let angle = 0;
let speed = 0;

function setup() {
  let canvas = createCanvas(320, 320);
  canvas.parent("p5-holder");
  angleMode(DEGREES);

  speed = random(1, 6);
}

function draw() {
  background(220);

  translate(width / 2, height / 2);

  noFill();
  stroke(0);
  strokeWeight(4);
  ellipse(0, 0, 240, 240);

  strokeWeight(2);
  for (let i = 0; i < 360; i += 30) {
    let x1 = cos(i) * 100;
    let y1 = sin(i) * 100;
    let x2 = cos(i) * 110;
    let y2 = sin(i) * 110;
    line(x1, y1, x2, y2);
  }

  rotate(angle);
  stroke(0);
  strokeWeight(6);
  line(0, 0, 0, -90);

  noStroke();
  fill(0);
  circle(0, 0, 10);

  angle = angle + speed;
}
