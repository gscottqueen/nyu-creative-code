// Wall Drawing #65 (1971) Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const LINE_WEIGHT = 1;
const NUMBER_OF_COLORS = 4;
const NUMBER_OF_LINES = CANVAS_WIDTH/LINE_WEIGHT;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  strokeWeight(LINE_WEIGHT);
} // initializer

function drawLines(coordinates, color) {
  stroke(color);
  // draw from top to bottom
  line(
    coordinates[0],
    coordinates[1],
    coordinates[2],
    coordinates[3]
  );
  line(
    coordinates[1],
    coordinates[0],
    coordinates[3],
    coordinates[2]
  );
  // draw from left to right
}

// line(x1, y1, x2, y2)
function draw() {
  for (let i = 0; i < NUMBER_OF_LINES; i++) {
    let randomColor = 255/NUMBER_OF_COLORS * random(1,NUMBER_OF_COLORS)

    drawLines([
      random(0, CANVAS_WIDTH),
      0,
      random(0, CANVAS_WIDTH),
      400
      ], randomColor)
    }
  noLoop();
}
