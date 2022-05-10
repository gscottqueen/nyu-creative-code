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
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 2, 2, 2, 2, 2, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0,
  0, 1, 1, 1, 1, 1, 0, 3, 0, 1, 1, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 1, 1, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 3, 0, 1, 1, 1, 0, 3, 0,
]

console.log(gridMatrices.length)

function draw() {
  // loop through gridMatrices drawing squares
  let rowNumber = 1
  gridMatrices.forEach((square, i) => {
    console.log(square)
    // because we are drawing squares, let's just use one size for length and width
    const squareSize = 40
    rect(0, 0, squareSize, squareSize)
    text(i, 10, 10, 70, 80);

    // to find if a number is a multiple of another we can use
    // the remainder opperator "%"
    // the index length value at "i", when divided by 21 gives gives us a remainder of 0, so it it returns true if we run the opperator -> i % 22 === 0
    // and because the first index length value of "i" is 0, we want to make sure we only consider index length values that are _not_ equal to 0 with the following opperator i !== 0
    // you can see these values when it runs by uncommenting the consloe log below
    // it will print the (index length value, the remainder of the evaluation, and the truthy value if the remainder is equal to 0 as a number)
    // console.log(i, i % 21, i % 21 === 0)
    // let rowNumber = 1
    console.log(i, rowNumber, i % 22, i % 22 === 0)
    if (i !== 0 && i % 22 === 0) {
      const x = -squareSize * 22
      const y = squareSize
      console.log(x, y)
      translate(x, y)
      rowNumber++
    } else {
      translate(squareSize, 0)
    }
  })
  noLoop()
}
