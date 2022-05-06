// Wall Drawing # 915 (1999): Arcs, circle, and irregular bands
// https://massmoca.org/event/walldrawing915/

const CANVAS_WIDTH = 2400;
const CANVAS_HEIGHT = 400;
const ARCS_1_COLORS = [
  "purple",
  "green",
  "orange",
  "red",
  "blue",
  "purple",
  "green",
  "yellow",
  "red",
  "green",
  "orange",
  "purple",
  "red",
  "yellow",
];

const ARCS_2_COLORS = [
  "yellow",
  "purple",
  "green",
  "red",
  "purple",
  "green",
  "yellow",
  "blue",
  "red",
  "purple",
  "blue",
  "red",
  "green",
  "red",
];

const CIRCLE_COLORS = [
  "red",
  "blue",
  "purple",
  "red",
  "orange",
  "green",
  "red",
  "blue",
  "yellow",
];

const BANDS_COLORS = [
  {
    color1: "orange",
    color2: "blue",
    amplitude: "35",
    period: "300",
  },
  {
    color1: "purple",
    color2: "red",
    amplitude: "20",
    period: "200",
  },
  {
    color1: "yellow",
    color2: "green",
    amplitude: "35",
    period: "600",
  },
  {
    color1: "blue",
    color2: "purple",
    amplitude: "35",
    period: "200",
  },
];

const ARCH_WIDTH = CANVAS_HEIGHT / ARCS_1_COLORS.length;
const CANVAS_SEG = CANVAS_WIDTH / 6;

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noStroke();
} // initialize our canvas and settings

// arc(x, y, w, h, start, stop, [mode], [detail])
function draw() {
  ARCS_1_COLORS.forEach((color, i) => {
    drawFillArc1(color, i);
  });
  translate(CANVAS_SEG, 0);
  ARCS_2_COLORS.forEach((color, i) => {
    drawFillArc2(color, i);
  });
  // draw circle
  translate(CANVAS_SEG * 2, 0);
  CIRCLE_COLORS.forEach((color, i) => {
    drawFillCircles(color, i);
  });
  translate(-CANVAS_SEG, 0);
  // draw first square
  fill("purple");
  rect(0, 0, CANVAS_SEG, CANVAS_SEG);
  fill("red");
  rect(
    ARCH_WIDTH,
    ARCH_WIDTH,
    CANVAS_SEG - ARCH_WIDTH * 2,
    CANVAS_SEG - ARCH_WIDTH * 2
  );
  translate(CANVAS_SEG * 2, 0);

  const bandHeight = CANVAS_HEIGHT / BANDS_COLORS.length;
  const bandWidth = CANVAS_SEG * 2;
  const xspacing = 16; // Distance between each horizontal location
  const yvalues = new Array(floor(bandWidth + xspacing / xspacing)); // Using an array to store height values for the wave

  function calcWave(amplitude, period) {
    console.log("working");
    const theta = 0; // Start angle at 0
    // const amplitude = 75.0; // Height of wave
    const dx = (TWO_PI / period) * xspacing; // Value for incrementing x

    // For every x value, calculate a y value with sine function
    let x = theta;
    for (let i = 0; i < yvalues.length; i++) {
      yvalues[i] = sin(x) * amplitude;
      x += dx;
    }
  }

  function renderWave() {
    beginShape();
    curveVertex(0, bandHeight / 2);
    curveVertex(0, bandHeight / 2);
    for (let x = 0; x < yvalues.length; x++) {
      curveVertex(x * xspacing, bandHeight / 2 + yvalues[x]);
    }
    curveVertex(bandWidth * xspacing, bandHeight);
    curveVertex(0, bandHeight);
    curveVertex(0, bandHeight);
    endShape();
  }
  // draw bands
  BANDS_COLORS.forEach((band, i) => {
    fill(band.color1);
    rect(0, 0, bandWidth, CANVAS_HEIGHT / BANDS_COLORS.length);

    // draw vertex curve
    fill(band.color2);
    calcWave(band.amplitude, band.period);
    renderWave();
    noStroke();
    translate(0, bandHeight);
  });

  noLoop();
}

function drawFillArc1(color, i) {
  const dimension = ARCH_WIDTH * 2.8 * (ARCS_1_COLORS.length - i);
  fill(color);
  arc(CANVAS_SEG, 0, dimension, dimension, HALF_PI, PI);
}

function drawFillArc2(color, i) {
  const dimension = ARCH_WIDTH * 2.8 * (ARCS_2_COLORS.length - i);
  fill(color);
  arc(0, CANVAS_HEIGHT, dimension, dimension, PI + HALF_PI, 0);
}

// circle(x, y, d)
function drawFillCircles(color, i) {
  const dimension = ARCH_WIDTH * 2.4 * (CIRCLE_COLORS.length - i);
  fill(color);
  circle(CANVAS_SEG / 2, CANVAS_HEIGHT / 2, dimension);
}
