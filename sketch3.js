function setup() {
  createCanvas(640, 480);
}

function draw() {
  if (mouseIsPressed) {
    fill('teal');
  } else {
    fill('hotpink');
  }
  ellipse(mouseX, mouseY, 80, 80);
}
