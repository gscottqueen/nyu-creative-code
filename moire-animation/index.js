
// Creates two opposing and overlapping sine waves
// which generates moire style patterns

// set up our variables and values
let dx; // Value for incrementing x
let yvalues; // Array of height values for the wave
let theta = 0.0; // Start angle at 0

// Try different values below for experimenting with the pattern
const xspacing = 2; // Distance between each horizontal line
const numberOfLines = 1000
let amplitude = 400.0; // Height of wave
let period = 800.0; // How many pixels before the wave repeats

// Create global functions
// Sourced from p5.js sine wave example
// https://p5js.org/examples/math-sine-wave.html

function calculateWave() {
  // Increment theta
  // Try different values here to change the speed for'angular velocity' here

  // Theta is a common way to reference the measure of an angle
  theta += 0.01;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function drawMoireWaveSet(rotate) {
  // draw sine wave with vertex lines
  beginShape(LINES);

  // if the rotate parameter is defined,
  // then we rotate the shape
  // to learn more about rotate
  // https://p5js.org/reference/#/p5/rotate
  rotate && rotate(PI)

  // iterate through the yvalues array and generate
  // a vertex line with two vertex(x,y) cordinates

  // to learn more about drawing vertex
  // https://p5js.org/reference/#/p5/vertex
  for (let x = 0; x < yvalues.length; x++) {

    // You can change the coordinate combinations here to manipulate the lines
    // I really just went with a trial and error approach until
    // I got something I liked
    vertex(x * xspacing + width + yvalues[x], height + yvalues[x]);
    vertex(x - xspacing, yvalues[x]);

    // generate a vertex line starting at the negative x coordinate
    vertex(-x * xspacing + width + yvalues[x], height + yvalues[x]);
    vertex(x - xspacing, yvalues[x]);
  }
  endShape();
}

function renderMoireWaveGroup() {
  stroke('white')

  // offset startpoint to visually center
  translate(width / 4 + 200, height / 4)

  // draw first set of moire wave patterns
  drawMoireWaveSet()

  // rotate then draw mirrored shapes
  translate(width / 4, height / 2)

  // draw second set of moire wave patterns, rotated
  drawMoireWaveSet(rotate)
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = 'margin: 0px'
  createCanvas(windowWidth, windowHeight);
  dx = (PI / period) * xspacing;
  yvalues = new Array(floor(numberOfLines));
  frameRate(40) // slow down frame rate
}

function draw() {
  background('black');
  calculateWave();
  renderMoireWaveGroup();
}
