const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 400;
let xspacing = 16; // Distance between each horizontal location
let w; // Width of entire wave
let theta = 0.0; // Start angle at 0
let amplitude = 75.0; // Height of wave
let period = 500.0; // How many pixels before the wave repeats
let dx; // Value for incrementing x
let yvalues; // Using an array to store height values for the wave

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
}

function draw() {
  background(0);
  calcWave();
  renderWave();
  noLoop();
}

function calcWave() {
  // Increment theta (try different values for
  // 'angular velocity' here)
  theta += 0.02;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  // noStroke();
  fill(255);
  // A simple way to draw the wave with an ellipse at each location

    beginShape();
    curveVertex(0, height/2)
    curveVertex(0, height / 2)
    for (let x = 0; x < yvalues.length; x++) {
      // ellipse(x * xspacing, height / 2 + yvalues[x], 16, 16);
      curveVertex(x * xspacing, height / 2 + yvalues[x])
    }
    curveVertex(width, height/2)
    curveVertex(width, height / 2)
    endShape();
}

