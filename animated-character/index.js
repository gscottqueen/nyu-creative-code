// set up mutable variables
let centerXPosition, centerYPosition
// set up constant variables
const offset = 10
// set up constant variables whose values are random integers
const x = getRandomInt(75, 200)
const interirorEyeFraction = getRandomInt(2,5)
const eyeDiameter = getRandomInt(75, 200)
const secondEye = getRandomInt(0, 5)
const mouthTiltX = getRandomInt(-75, 75)
const mouthTiltY = getRandomInt(-75, 75)

// since we don't have access to p5.js random() here
// we need to create our own. This function accepts two parameters
// as integers for min and max values
// to learn more about this function visit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = 'margin: 0px'

  // set up our canvas details
  createCanvas(windowWidth, windowHeight);
  background('black')
  centerXPosition = width / 2 // center of the canvas
  centerYPosition = height / 2 // center of the canvas
}

function drawEye() {
  // move our eyes with the cursor
  // calculate offset by watching cursor position within the quadriants

  // the operations below are ternaries, they are another way to write
  // if/else conditionals. to learn more about teranarie opperators
  // visit https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
  const xOffset = mouseX < centerXPosition
    ? -offset
    : offset
  const yOffset = mouseY < centerYPosition
    ? -offset
    : offset

  fill('white')
  stroke('black')
  // if we only draw one eye our drawing steps have different details
  if (secondEye === 0) {
    // draw larger white eye
    circle(
      centerXPosition,
      centerYPosition,
      eyeDiameter
    );
    // draw smaller black pupil
    fill('black')
    circle(
      centerXPosition + xOffset,
      centerYPosition + yOffset,
      eyeDiameter / interirorEyeFraction
    );
  } else {
    // draw larger white eye
    circle(
      centerXPosition - x,
      centerYPosition,
      eyeDiameter
    );
    // draw smaller black pupil
    fill('black')
    circle(
      centerXPosition - x + xOffset,
      centerYPosition + yOffset,
      eyeDiameter / interirorEyeFraction
    );
  }
}

// TODO: need to include positionX, positionY, characterWidth, characterHeight, and characterColor

function draw() {
  const color = random(255)
  stroke(color)
  ellipse(
    mouseX,
    mouseY,
    random(2), // here we have access to p5.js random() so we can use it freely
    random(2)
  )
  drawEye()
  if (secondEye !== 0) {
    translate(x * 2, 0)
    drawEye()
    translate(-x * 2, 0)
  }
  stroke('white')
  strokeWeight(2)
  line(
    centerXPosition - x + mouthTiltX,
    centerYPosition + eyeDiameter + mouthTiltX,
    centerXPosition + x + mouthTiltY,
    centerYPosition + eyeDiameter + mouthTiltY
  )
}
