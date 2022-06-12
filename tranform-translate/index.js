function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  // set up our canvas details
  createCanvas(windowWidth, windowHeight);
  background("black");
  noStroke();
}

function draw() {
  const from = color("black"); // what color we lerp from
  const to = color("white"); // what color we want to lerp to

  translate(width / 2, height / 2); // move where the user takes center

  for (var i = 0; i < windowWidth; i++) {
    // for each iteration
    fill(lerpColor(from, to, random(0.0, 1))); // fill object w a lerp color
    rotate(radians(frameCount) / 40); // rotate 1 40th of the framecount
    translate(i, 0); // translate around the center of current iteration
    scale(1, 1); // scale up by 1 each time
    circle(i / frameCount, i / frameCount, 1); // create object
  }
}
