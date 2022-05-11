// Schematic Composition
// Sophie Taeuber-Arp1933
// Physical Dimensions: 35 3/8 x 49 1/4" (89.6 x 125 cm)
const BEIGE = '#ebdcc5'
const BLACK = '#000000'
// create a 2dimensional array that represents a grid layout of the
// black box with detail from the following criteria
// 0 = black square
// 1 = beige square
// 2 = beige square bordered
// 3 = beige circle inside black square
const GRID_MATRICES = [
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 2, 2, 2, 2, 2, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
[1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

function getMaxGridHeight() {
  // creates an array of dimension length
  // [<number-of-rows>, <number-of-cols-per-row>]
  const dimensions = [
    // just count the length of indexes in the first level of the 2d array
    GRID_MATRICES.length,
    // ????
    GRID_MATRICES.reduce((x, y) => Math.max(x, y.length), 0)
  ];
  const maxGridHeight = (windowWidth / dimensions[1]) * dimensions[0]
  return maxGridHeight
}

function setup() {
  document.getElementsByTagName("body")[0].style = 'margin: 0px' // remove default browser margin on the body element
  // we need to pass a max grid height as the scond varable to keep the dynamic
  // ratio in relationship to the amount of rows we might expect to generate
  createCanvas(windowWidth, getMaxGridHeight())
}

function draw() {
  // loop through 2dArray of GRID_MATRICES drawing squares
  // each index in the arrray represents a row
  for (let i = 0; i < GRID_MATRICES.length; i++) {
    // we can get a dynamic squareSize by utilizing our setup width
    // to create a responsive drawing
    const squareSize = width / GRID_MATRICES[i].length
    // each index in the nested array represents a col
    for (let j = 0; j < GRID_MATRICES[i].length; j++) {
      // multiply each index by size to get our x,y offsets
      const x = j * squareSize;
      const y = i * squareSize;
      const diameter = squareSize;
      // switch method based on case match, ie. j=1
      // 0 is default since it is the most common case
      // in order to get at the value of in our 2d Array for each case
      // we need to find the coordinate in the matrices by combining row
      // and col index, ie. array[<row-index>][<col-index>]
      switch (GRID_MATRICES[i][j]) {
        case 1:
          // 1 = beige square
          noStroke()
          fill(BEIGE)
          break;
        case 2:
          // 2 = beige square bordered
          stroke(BLACK)
          fill(BEIGE)
          break;
        case 3:
          // 3 = beige circle inside black square
          fill(BEIGE)
          // circle(x, y, d)
          // we need to move the origin of the circle half its diameter
          // in the negative "x" coordinate and the positive "y" coordinate
          // to place it in the center of its square
          circle(x - squareSize/2, y + squareSize/2, squareSize)
          fill(BLACK)
        default:
          // 0 = black square
          stroke(BLACK)
          fill(BLACK)
      }
      // rect(x, y, w, h)
      rect(x, y, squareSize, squareSize);
    }
  }
  noLoop()
}
