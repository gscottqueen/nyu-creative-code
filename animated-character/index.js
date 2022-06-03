function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
}

const offset = 5
const x = getRandomInt(30, 60)
const eyeDiameter = getRandomInt(20, 60)
const drawSecondEye = getRandomInt(0, 2)
const mouthTiltX = getRandomInt(-10, 10)
const mouthTiltY = getRandomInt(-10,10)

function setup() {
  document.getElementsByTagName("body")[0].style = 'margin: 0px'
  createCanvas(windowWidth, windowHeight);
  background('black')
}

function drawEye() {
  fill('white')
  stroke('black')
  const xOffset = mouseX < width / 2
    ? -offset
    : offset
  const yOffset = mouseY < height / 2
    ? -offset
    : offset
  if (drawSecondEye === 0) {
    circle(
      (width / 2),
      height / 2,
      eyeDiameter
    );
    fill('black')
    circle(
      (width / 2) + xOffset,
      (height / 2) + yOffset,
      10
    );
  } else {
    circle(
      (width / 2) - x,
      height / 2,
      eyeDiameter
    );
    fill('black')
    circle(
      (width / 2) - x + xOffset,
      (height / 2) + yOffset,
      10
    );
  }
}

function draw() {
  const color = random(255)
  stroke(color)
  ellipse(
    mouseX,
    mouseY,
    random(2),
    random(2)
  )
  drawEye()
  if (drawSecondEye !== 0) {
    translate(x * 2, 0)
    drawEye()
    translate(-x * 2, 0)
  }
  stroke('white')
  strokeWeight(2)
  line(
    (width / 2) - x + mouthTiltX,
    (height / 2) + eyeDiameter + mouthTiltX,
    (width / 2) + x + mouthTiltY,
    (height / 2) + eyeDiameter + mouthTiltY
  )
}
