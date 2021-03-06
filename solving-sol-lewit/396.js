// Wall Drawing #396 (1983): A black five-pointed star, a yellow six-pointed star, a red seven-pointed star, and a blue eight-pointed star, drawn in color and India ink washes.

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const RADIUS_1 = 70; // outside radius
const RADIUS_2 = RADIUS_1 / 2; // inside radius
const HORIZONTAL_CENTER = CANVAS_WIDTH / 2;
const VERTICAL_CENTER = CANVAS_HEIGHT / 2;
const OFFSET = RADIUS_2 / 2;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
} // initialize our canvas and settings

function draw() {
  // black five-pointed star
  star(
    HORIZONTAL_CENTER - RADIUS_1 - OFFSET,
    VERTICAL_CENTER - RADIUS_1 - OFFSET,
    5,
    '#050505'
  );

  // yellow six-pointed star
  star(
    HORIZONTAL_CENTER + RADIUS_1 + OFFSET,
    VERTICAL_CENTER - RADIUS_1 - OFFSET,
    6,
    '#ffe632'
  );

  // red seven-pointed star
  star(
    HORIZONTAL_CENTER - RADIUS_1 - OFFSET,
    VERTICAL_CENTER + RADIUS_1 + OFFSET,
    7,
    '#d4405a'
  );

  // blue eight-pointed star
  star(
    HORIZONTAL_CENTER + RADIUS_1 + OFFSET,
    VERTICAL_CENTER + RADIUS_1 + OFFSET,
    8,
    '#0094c8'
  );
}

function star(x, y, numberOfPoints, color) {
  const angle = TWO_PI / numberOfPoints;
  const halfAngle = angle / 2;
  // set up shape
  beginShape();
  fill(color);
  noStroke();

  // brought in from stars example https://p5js.org/examples/form-star.html
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
