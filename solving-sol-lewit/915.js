// Wall Drawing # 915 (1999): Arcs, circle, and irregular bands
// https://massmoca.org/event/walldrawing915/

const CANVAS_WIDTH = 2400;
const CANVAS_HEIGHT = 400;
const ARCS_1_COLORS = [
  'purple',
  'green',
  'orange',
  'red',
  'blue',
  'purple',
  'green',
  'yellow',
  'red',
  'green',
  'orange',
  'purple',
  'red',
  'yellow'
]

const ARCS_2_COLORS = [
  'yellow',
  'purple',
  'green',
  'red',
  'purple',
  'green',
  'yellow',
  'blue',
  'red',
  'purple',
  'blue',
  'red',
  'green',
  'red'
]

const CIRCLE_COLORS = [
  'red',
  'blue',
  'purple',
  'red',
  'orange',
  'green',
  'red',
  'blue',
  'yellow'
]

const BANDS_COLORS = [
  {
    'color1' : 'orange',
    'color2' : 'blue',
    'peaks' : '2'
  },
  {
    'color1' : 'purple',
    'color2' : 'red',
    'peaks' : '4'
  },
  {
    'color1' : 'yellow',
    'color2' : 'green',
    'peaks' : '2'
  },
  {
    'color1' : 'blue',
    'color2' : 'purple',
    'peaks' : '4'
  }
]

const ARCH_WIDTH = CANVAS_HEIGHT / ARCS_1_COLORS.length
const CANVAS_SEG = CANVAS_WIDTH / 6

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noStroke();
} // initialize our canvas and settings

// arc(x, y, w, h, start, stop, [mode], [detail])
function draw() {
  ARCS_1_COLORS.forEach((color, i) => {
    drawFillArc1(color, i)
  })
  translate(CANVAS_SEG, 0);
  ARCS_2_COLORS.forEach((color, i) => {
    drawFillArc2(color, i)
  })
  // draw circle
  translate(CANVAS_SEG * 2, 0);
  CIRCLE_COLORS.forEach((color, i) => {
    drawFillCircles(color, i)
  })
  translate(-CANVAS_SEG, 0);
  // draw first square
  fill('purple')
  rect(0, 0, CANVAS_SEG, CANVAS_SEG)
  fill('red')
  rect(ARCH_WIDTH, ARCH_WIDTH, CANVAS_SEG - ARCH_WIDTH * 2, CANVAS_SEG - ARCH_WIDTH * 2);
  translate(CANVAS_SEG * 2, 0)
  // draw bands
  BANDS_COLORS.forEach((band,i) => {
    const bandHeight = CANVAS_HEIGHT / BANDS_COLORS.length
    const bandWidth = CANVAS_SEG * 2
    const waveWidth = bandWidth / band.peaks
    const halfWave = waveWidth / 2
    fill(band.color1)
    rect(0, 0, bandWidth, CANVAS_HEIGHT / BANDS_COLORS.length)
    // draw vertex curve
    fill(band.color2)
    beginShape();
    curveVertex(0, bandHeight);
    curveVertex(0, bandHeight);
    curveVertex(0, bandHeight / 2);

    for (p = 0; p < band.peaks; p++) {
      // first half of wave
      curveVertex(waveWidth * p, bandHeight / 4);
      // second half of wave
      curveVertex(waveWidth * p, bandHeight / 2);
    }

    curveVertex(bandWidth, bandHeight / 2);
    curveVertex(bandWidth, bandHeight);
    curveVertex(bandWidth, bandHeight);
    endShape();
    translate(0, bandHeight)
  })

  noLoop();
}

function drawFillArc1(color, i) {
  const dimension = (ARCH_WIDTH * 2.8) * (ARCS_1_COLORS.length - i)
  fill(color)
  arc(
    CANVAS_SEG,
    0,
    dimension,
    dimension,
    HALF_PI,
    PI
    );
}

function drawFillArc2(color, i) {
  const dimension = (ARCH_WIDTH * 2.8) * (ARCS_2_COLORS.length - i)
  fill(color)
  arc(
    0,
    CANVAS_HEIGHT,
    dimension,
    dimension,
    PI + HALF_PI,
    0
    );
}

// circle(x, y, d)
function drawFillCircles(color, i) {
  const dimension = (ARCH_WIDTH * 2.4) * (CIRCLE_COLORS.length - i)
  fill(color)
  circle(
    CANVAS_SEG / 2,
    CANVAS_HEIGHT / 2,
    dimension
  );
}
