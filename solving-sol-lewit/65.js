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
 * draws and colors our lines on canvas
 * @param {number} min - minimum coordinate
 * @param {number} max - maximum coordinate
 * @param {number} color 0-255
 */
function drawLines(min, max, color) {
  stroke(color);
  // draw from top to bottom
  line(random(min, max), min, random(min, max), max);
  // draw from left to right
  line(min, random(min, max), max, random(min, max));
}

function draw() {
  for (let i = 0; i < NUMBER_OF_LINES; i++) {
    let randomColor = (255 / NUMBER_OF_COLORS) * random(1, NUMBER_OF_COLORS);
    drawLines(0, CANVAS_WIDTH, randomColor);
  }
  noLoop();
}
