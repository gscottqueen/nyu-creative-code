// Wall Drawing # 915 (1999): Arcs, circle, and irregular bands
// https://massmoca.org/event/walldrawing915/

const CANVAS_WIDTH = 1600;
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
const ARCH_WIDTH = CANVAS_HEIGHT / ARCS_1_COLORS.length
const CANVAS_SEG = CANVAS_WIDTH / 4

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  noStroke();
} // initialize our canvas and settings

// arc(x, y, w, h, start, stop, [mode], [detail])
function draw() {
  ARCS_1_COLORS.forEach((color, i) => {
    drawFillArch1(color, i)
  })
  translate(CANVAS_SEG, 0);
  ARCS_2_COLORS.forEach((color, i) => {
    drawFillArch2(color, i)
  })
  noLoop();
}

function drawFillArch1(color, i) {
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

function drawFillArch2(color, i) {
  console.log(radians(90))
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
