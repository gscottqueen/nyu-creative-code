// generatively combining multiple lissa-jous waves and wrapping them around a spehrical shape in an interactive WEBGL instance

// set up our mutable values
let radius = 300;
let angle = 90;
let angle2 = 180;
let rotation = 0;
let t = 0;
let numberOfWaveLengths = 1;

// pass through params to create the more performant vertex points along our lissajous frequencies
function drawVertex(radius, freq, freq2, weight, increment, color) {
  for (let theta = 0; theta < 360; theta += increment) {
    let x = radius * cos(theta * freq);
    let y = radius * sin(theta * freq) * sin(theta * freq2);
    let z = radius * sin(theta * freq) * cos(theta * freq2);
    fill(255, 255, 255, 5); // at half the opacity
    stroke(color);
    strokeWeight(weight);
    // listen for a mouse click
    if (mouseIsPressed) {
      noFill();
      stroke("white");
    }
    vertex(x, y, z);
  }
}

// adapted from https://github.com/Creativeguru97/YouTube_tutorial/blob/master/Play_with_geometry/SphericalCoordinates/0_3_SphericalLissajous/sketch.js#L53-L68
function drawAnimatedSphericalLissajous() {
  let freq = numberOfWaveLengths * sin(angle);
  let freq2 = numberOfWaveLengths * sin(angle2);

  // draw the lines
  beginShape();
  drawVertex(radius, freq, freq2, 1, 0.5, 25);
  endShape(CLOSE);

  // draw points along the lines
  beginShape(POINTS);
  drawVertex(radius, freq, freq2, 10, 10, 255);
  endShape(CLOSE);

  angle += 0.03;
  angle2 += 0.03;
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  // I wanted to experiment with WEBGL a bit and was able to follow this tutorial to get started https://www.youtube.com/watch?v=SGHWZz5Mrsw
  createCanvas(windowWidth, windowHeight, WEBGL);
  angleMode(DEGREES); // set to degrees for easy mode
  stroke(255); // default stroke to white
  noFill(); // default fill to none
  rotation = random(360); // random rotate between 360deg
  numberOfWaveLengths = random(2, 4); // 2-4 waves
}

function draw() {
  // listen for a mouse click
  if (mouseIsPressed) {
    background(0, 0, 0, 4); // this will clear the noise to reveal our lissajous waves
  }
  orbitControl(4, 4); // drag mouse while clicked to change angle
  rotateY(rotation); // rotate to a random angle each time
  drawAnimatedSphericalLissajous(); // draw our lissajous
}
