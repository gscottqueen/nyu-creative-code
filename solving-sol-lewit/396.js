// Wall Drawing #396 (1983): A black five-pointed star, a yellow six-pointed star, a red seven-pointed star, and a blue eight-pointed star, drawn in color and India ink washes.

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const RADIUS_1 = 70 // outside radius
const RADIUS_2 = RADIUS_1 / 2 // inside radius
const HORIZONTAL_CENTER = CANVAS_WIDTH/2
const VERTICAL_CENTER = CANVAS_HEIGHT/2

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
} // initialize our canvas and settings

function draw() {
  // black five-pointed star
  push();
  star(
      HORIZONTAL_CENTER - RADIUS_1,
      VERTICAL_CENTER - RADIUS_1,
      5
    );
  pop();

  // yellow six-pointed star
  push();
  star(
      HORIZONTAL_CENTER + RADIUS_1,
      VERTICAL_CENTER - RADIUS_1,
      6
    );
  pop();

  // red seven-pointed star
  push();
  star(
      HORIZONTAL_CENTER - RADIUS_1,
      VERTICAL_CENTER + RADIUS_1,
      7
    );
  pop();

  // blue eight-pointed star
  push();
  star(
      HORIZONTAL_CENTER + RADIUS_1,
      VERTICAL_CENTER + RADIUS_1,
      8
    );
  pop();
}

function star(x, y, numberOfPoints) {
  let angle = TWO_PI / numberOfPoints;
  let halfAngle = angle / 2;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * RADIUS_1;
    let sy = y + sin(a) * RADIUS_1;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * RADIUS_2;
    sy = y + sin(a + halfAngle) * RADIUS_2;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
