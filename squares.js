class Dot {
  constructor(pos, r) {
    if (pos) {
      this.pos = pos.copy();
      this.r = r;
    } else {
      this.pos = createVector();
      this.r = 100;
    }
    this.dir = p5.Vector.random2D();
    this.dir.setMag(0.5);
    this.rot = random(-0.1, 0.1);
    this.color = random(1) < 0.5 ? color(255,0,0) : color(50);
  }

  update() {
    //this.v.x += 1;
    this.pos.add(this.dir);
    this.dir.rotate(this.rot);

    if (random(1) < 0.01 && this.r > 5 && dots.length < 100) {
      dots.push(new Dot(this.pos, this.r * 0.5));
    }
  }

  show() {
    noStroke();
    fill(this.color);
    rectMode(CENTER);
    square(this.pos.x, this.pos.y, this.r,10);
  }
}

let dots = [];

function setup() {
//   createCanvas(windowWidth,windowHeight);
  backgroundSketch = createCanvas(windowWidth,windowHeight);
  dots.push(new Dot());
  backgroundSketch.background(0);
}

function draw() {
  translate(width / 2, height / 2);
  let n = 10;
  for (let i = 0; i < n; i++) {
    rotate(TWO_PI / n);
    for (let dot of dots) {
      dot.show();
    }
  }
  for (let dot of dots) {
    dot.update();
  }
}
