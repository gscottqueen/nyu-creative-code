// Creates two opposing and overlapping sine wave patterns
// which generates moire style animation

// set up our mutable variables and values
let dx; // Value for incrementing x
let yvalues; // Array of height values for the wave
let theta = 0; // Start angle at 0

// set up our constant values
// Try different values below for experimenting with the pattern
const amplitude = 400; // Height of wave
const period = 800; // How many pixels before the wave repeats
const xspacing = 2; // Distance between each horizontal line
const numberOfLines = 1000;

// Create global functions

// Sourced from p5.js sine wave example
// https://p5js.org/examples/math-sine-wave.html

function calculateWave() {
  // Increment theta
  // Theta is a common way to reference the measure of an angle
  // Try different values here to change the speed for 'angular velocity'
  theta += 0.01;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

// each group will be made up of two moire sign wave patterns
function drawMoireWaveSet(rotate) {
  // draw sine wave with vertex lines
  beginShape(LINES);

  // if the rotate parameter is defined, then we rotate the shape

  // to learn more about rotate
  // https://p5js.org/reference/#/p5/rotate

  if (rotate !== undefined) {
    rotate(PI);
  }

  // iterate through the yvalues array and generate
  // a vertex line with two vertex(x,y) cordinates

  // to learn more about drawing vertex
  // https://p5js.org/reference/#/p5/vertex
  for (let x = 0; x < yvalues.length; x++) {
    // You can change the coordinate combinations here to manipulate the lines
    // I really just went with a trial and error approach until I got something I liked
    vertex(x * xspacing + width + yvalues[x], height + yvalues[x]);
    vertex(x - xspacing, yvalues[x]);

    // generate a vertex line starting at the negative x coordinate
    vertex(-x * xspacing + width + yvalues[x], height + yvalues[x]);
    vertex(x - xspacing, yvalues[x]);
  }
  endShape();
}

// each group will be made up of two moire wave sets
function renderMoireWaveGroup() {
  // offset startpoint to visually center
  translate(width / 4 + 200, height / 4);

  // draw first set of moire wave patterns
  drawMoireWaveSet();

  // rotate origin
  // this helps creates a more fractal overaly
  translate(width / 4, height / 2);

  // draw second set of moire wave patterns, rotated
  drawMoireWaveSet(rotate);
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";

  // set up canvas
  createCanvas(windowWidth, windowHeight);

  // set up our reference yvalues and incrementing dx value
  dx = (PI / period) * xspacing;
  yvalues = new Array(floor(numberOfLines));

  // slow down frame rate for a more graceful animation
  frameRate(40);
}

function draw() {
  // set background color
  background("black");

  // set stroke color
  stroke("white");

  // calculate our waves
  calculateWave();

  // render our wave groups
  renderMoireWaveGroup();
}
