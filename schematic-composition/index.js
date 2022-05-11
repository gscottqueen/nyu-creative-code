// Schematic Composition
// Sophie Taeuber-Arp1933
// Physical Dimensions: 35 3/8 x 49 1/4" (89.6 x 125 cm)
const CANVAS_WIDTH = 1880;
const CANVAS_HEIGHT = 600;
const BEIGE = '#ebdcc5'
const BLACK = '#000000'

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
  background(BEIGE)
}

// cols = 22
// rows = 14
// 0 = black square
// 1 = beige square
// 2 = beige square bordered
// 3 = beige circle inside black square

const gridMatrices = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 2, 2, 2, 2, 2, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0],
]

console.log(gridMatrices.length)

function draw() {
  // loop through 2dArray of gridMatrices drawing squares
  const squareSize = 40;
  // each index in the arrray represents a row
  for (let i = 0; i < gridMatrices.length; i++) {
    // each index in the nested array represents a col
    for (let j = 0; j < gridMatrices[i].length; j++) {
      // multiply each index by size to get x,y offsets
      const x = j * squareSize;
      const y = i * squareSize;
      // rect(x, y, w, h)
      rect(x, y, squareSize, squareSize);
    }
  }
  noLoop()
}
