// Wall Drawing #65 (1971) Lines not short, not straight, crossing and touching, drawn at random, using four colors, uniformly dispersed with maximum density, covering the entire surface of the wall.
const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;
const LINE_WEIGHT = 1;
const NUMBER_OF_COLORS = 4;
const NUMBER_OF_LINES = CANVAS_WIDTH / LINE_WEIGHT;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  strokeWeight(LINE_WEIGHT);
} // initialize our canvas and settings

/**
 * Takes in an array of numbers and number 0 through 255 to create and color
 * our lines
 * @param {array} coordinates - The title of the book.
 * @param {number} color - The author of the book.
 */
function drawLines(coordinates, color) {
  stroke(color);
  // draw from top to bottom
  line(
    coordinates[0],
    coordinates[1],
    coordinates[2],
    coordinates[3]
  );
  // draw from left to right
  line(
    coordinates[1],
    coordinates[0],
    coordinates[3],
    coordinates[2]
  );
}

function draw() {
  for (let i = 0; i < NUMBER_OF_LINES; i++) {
    let randomColor = (255 / NUMBER_OF_COLORS) * random(1, NUMBER_OF_COLORS);
    const max = CANVAS_WIDTH;
    const min = 0;
    drawLines([
      random(min, max),
      min,
      random(min, max),
      max
    ],
    randomColor
    );
  }
  noLoop();
}
