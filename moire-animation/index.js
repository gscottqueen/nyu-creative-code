// set the inital states
// initial x position
let x = 225
//  we will use the toggle state later to determine which
// x direction to travel
let toggle = false

function setup() {
  createCanvas(500, 500);
  // slow down the animation with frameRate()
  frameRate(10)
}

function draw() {
  background('white');
  // we want to travel 25px at any moment
  const offset = 25

  // we travel positive offset and negative offset, so we need to double in our
  // we want to increment by 10, this is a good way to get 10px of space between each elipse
  for (let i = 0; i < width - (offset * 2); i += 10) {
    noFill()
    ellipse(width / 2, height / 2, i, i)
    ellipse(x, height / 2, i, i)
  }

  if (toggle === false) {
    x = x + 3
  }

  if (toggle === true) {
    x = x - 3
  }

  if (x > 275) {
    toggle = true
  }

  if (x < 225) {
    toggle = false
  }


}
