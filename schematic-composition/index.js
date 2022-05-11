// Schematic Composition
// Sophie Taeuber-Arp1933
// Physical Dimensions: 35 3/8 x 49 1/4" (89.6 x 125 cm)

// Setup Global Variables

// default colors
const BEIGE = '#ebdcc5'
const BLACK = '#000000'

// create a two-dimensional array that represents a grid layout of the
// painting with detail from the following criteria
// 0 = black square
// 1 = beige square
// 2 = beige square bordered
// 3 = beige circle inside black square

// you can see more about multi-dimensional arrays here https://javascript.plainenglish.io/javascript-multi-dimensional-arrays-7186e8edd03

const GRID_MATRICES = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 2, 2, 2, 2, 2, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 1, 1, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 0, 3, 0, 2, 2, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 3, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 0, 3, 0, 3, 3, 0, 3, 0, 3, 3, 3, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0, 1, 1],
  [1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]

// Setup Global Functions
function getMaxGridHeight() {
  // create an array of dimensions x,y by length
  // the return should contain [<number-of-rows>, <number-of-cols-per-row>]
  const dimensions = [
    // just count the length of indexes in the first level of the 2d array
    GRID_MATRICES.length,

    // we can compare the two values of length in a 2d array and useing
    // Math.max and a reducer to compute maximum index for our y length
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
    GRID_MATRICES.reduce((x, y) => Math.max(x, y.length), 0)
  ];
  // calculate the max grid height based on our dimension values
  const maxGridHeight = (windowWidth / dimensions[1]) * dimensions[0]
  // return our calculated gridHeight
  return maxGridHeight
}
// uncomment the code below to see return in console
// console.log(getMaxGridHeight())

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the window 0,0 index
  document.getElementsByTagName("body")[0].style = 'margin: 0px'

  // we need to pass a max grid height as the second varable to keep the dynamic
  // ratio in relationship to the amount of rows we might expect to generate
  // from our GRID_MATRICES array
  createCanvas(windowWidth, getMaxGridHeight())
}

function draw() {
  // loop through 2d array of GRID_MATRICES drawing squares
  // each index in the arrray represents a row
  for (let i = 0; i < GRID_MATRICES.length; i++) {
    // we can get a dynamic squareSize by utilizing our setup width
    // to help create a dynamic drawing on initial render
    const squareSize = height / GRID_MATRICES[i].length

    // each index in the nested array represents a col
    // when nesting loops it is best practice to initalize the first variable as "i", and the second variable as "j"
    for (let j = 0; j < GRID_MATRICES[i].length; j++) {
      // multiply each index by size to get our x,y offsets
      // for each squares coordinates
      const x = j * squareSize;
      const y = i * squareSize;

      // create a switch statment based on case match of values stored in
      // our GRID_MATRICES array, ie.j = 1

      // you can see more about switch statments here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

      // in order to get at the value of in our 2d Array for each case
      // we need to find the coordinate in the matrices by combining row
      // and col index, ie. array[<row-index>][<col-index>]
      switch (GRID_MATRICES[i][j]) {
        case 0:
          // 0 = black square
          stroke(BLACK)
          fill(BLACK)
          // rect(x, y, w, h)
          rect(x, y, squareSize, squareSize);
          break;
        case 1:
          // 1 = beige square
          noStroke()
          fill(BEIGE)
          rect(x, y, squareSize, squareSize);
          break;
        case 2:
          // 2 = beige square bordered
          stroke(BLACK)
          fill(BEIGE)
          rect(x, y, squareSize, squareSize);
          break;
        case 3:
          // 3 = beige circle inside black square
          fill(BLACK)
          rect(x, y, squareSize, squareSize);
          fill(BEIGE)

          // circle(x, y, d)
          // we need to move the origin of the circle half its diameter
          // in the positive "x" direction and the positive "y" direction
          // to place it in the center of its square
          circle(x + squareSize/2, y + squareSize/2, squareSize)
        }
      }
    }
    noLoop()
}
