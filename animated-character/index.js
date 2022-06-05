// I've attempted to create a simple character personality with just two eyes
// and a mouth. I've also included some great interactive elements like,
//  1. each time the screen refreshes it randomly generates a new character
//  2. the user can draw on the canvas to stylize the character
//  3. the characters eyes follow you while you are drawing!!
//  4. pressing spacebar will allow you to print/download your character

// set up mutable variables
let centerXPosition, centerYPosition
// set up constant variables
const offset = 10
const head = document.getElementsByTagName("head")
const colors = [
  'Black', 'BlueViolet', 'Coral', 'DarkGrey', 'DarkKhaki', 'DarkSeaGreen', 'DarkSlateGrey', 'DeepPink', 'DeepSkyBlue', 'DodgerBlue', 'Gold', 'IndianRed'
]
// set up constant variables whose values are random
const x = getRandomInt(75, 200)
const interirorEyeFraction = getRandomInt(2,5)
const eyeDiameter = getRandomInt(75, 200)
const secondEye = getRandomInt(0, 5)
const mouthTiltX = getRandomInt(-75, 75)
const mouthTiltY = getRandomInt(-75, 75)
const color = getRandomColor(colors)

// since we don't have access to p5.js random() here
// we need to create our own. This function accepts two parameters
// as integers for min and max values
// to learn more about this function visit
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random#getting_a_random_integer_between_two_values
function getRandomInt(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min) + min) //The maximum is exclusive and the minimum is inclusive
}

// since we don't have access to p5.js random() here
// we need to create our own. This function accepts one parameter
// as an array of string values, and returns just one value from the array
function getRandomColor(array) {
  return array[Math.floor(Math.random()*array.length)]
}

// this listens for keydown events and prints the screen
// if the spacebar is pressed
document.addEventListener("keydown", event => {
  event.code === 'Space' && window.print()
});

// automatically confgures the print screen to be landscape
function addPrintPageCSS() {
  // we can add custom styles to the print dialog here
  const css = '@page { size: landscape; }'
  // get the <head /> element from the DOM
  const head = document.head || document.getElementsByTagName('head')[0]
  // create a <style /> element for binding our styles to
  const style = document.createElement('style')
  // set media type
  style.media = 'print'

  // check to ensure there is a styleSheet key in the style object
  if (style.styleSheet) {
    // add our css value to the cssText key within the style object
    style.styleSheet.cssText = css
  } else {
    // if that doesn't exist then we just create a textNode
    style.appendChild(document.createTextNode(css))
  }
  // append our created <style /> element to render within the <head /> element
  head.appendChild(style)
}

addPrintPageCSS();

function drawEye(eyeColor) {
  // move our characters eyes with the cursor
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
  stroke(eyeColor)
  // if we only draw one eye our drawing steps have different details
  if (secondEye === 0) {
    // draw larger white eye
    circle(
      centerXPosition,
      centerYPosition,
      eyeDiameter
    );
    // draw smaller black pupil
    fill(eyeColor)
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
    fill(eyeColor)
    circle(
      centerXPosition - x + xOffset,
      centerYPosition + yOffset,
      eyeDiameter / interirorEyeFraction
    );
  }
}

function drawCharacter(positionX, positionY, characterWidth, characterHeight, characterColor) {
  // we always draw at least one eye
  drawEye(characterColor)
  if (secondEye !== 0) {
    // usually we draw two eyes unless we generate a 0 on load
    translate(x * 2, 0) // we need move at least two eye widths
    drawEye(characterColor)
    translate(-x * 2, 0) // then move back to where we were
  }
  stroke('white')
  strokeWeight(4)
  // simple mouth with a bit of tilt for less serious characters
  // line(x1, x2, y1, y2)
  line(
    characterWidth - positionX + mouthTiltX,
    characterHeight + positionY + mouthTiltX,
    characterWidth + positionX + mouthTiltY,
    characterHeight + positionY + mouthTiltY
  )
}

function drawLine() {
  stroke('white')
  fill('white')
  // ellipse(x, y, height, width)
  ellipse(mouseX,mouseY,2,2)
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = 'margin: 0px'

  // set up our canvas details
  createCanvas(windowWidth, windowHeight)
  background(color)
  centerXPosition = width / 2 // calculate center of the canvas
  centerYPosition = height / 2 // calculate center of the canvas
}

function draw() {
  // draw the full character with our function
  drawCharacter(x, eyeDiameter, centerXPosition, centerYPosition, color)

  // allow the user to interact with the character by drawing on the screen
  // add a hat, nose, hair, or whatever, then press the 'spacebar' and share
  // with folks what you created
  drawLine()
}

