// randomly generates a grid of greyscale squares
// toggle off the animate checkbox to see a simple gradient
// scale the size of each square
// scale the speed of which the animation refreshes
// scale the color range of which the colorMap will be generted

let colorMap = [];
let cols, rows, sz, color, animationSpeed, isAnimated;
let speedSlider,
  speedLabel,
  colorSlider,
  colorLabel,
  sizeSlider,
  sizeLabel,
  checkbox;

function make2dArray(cols, rows) {
  const arr = new Array(cols);
  let color = 0;
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (let j = 0; j < arr[i].length; j++) {
      color += 1;
      arr[i][j] = color;
    }
  }
  return arr;
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";

  // set up our canvas details
  createCanvas(windowWidth, windowHeight);

  // create DOM elements
  checkbox = createCheckbox("Animate", true);
  checkbox.style("font-size", "16px");
  checkbox.style("font-weight", "bold");
  checkbox.style("color", "white");
  checkbox.position(10, 10);

  sizeLabel = createDiv("Scale Size");
  sizeLabel.style("font-size", "16px");
  sizeLabel.style("font-weight", "bold");
  sizeLabel.style("color", "white");
  sizeLabel.position(15, 55);

  sizeSlider = createSlider(1, 100, random(100), 1);
  sizeSlider.position(10, 75);
  sizeSlider.style("width", "180px");

  speedLabel = createDiv("Scale Speed");
  speedLabel.style("font-size", "16px");
  speedLabel.style("font-weight", "bold");
  speedLabel.style("color", "white");
  speedLabel.position(15, 95);

  speedSlider = createSlider(1, 60, random(60), 1);
  speedSlider.position(10, 115);
  speedSlider.style("width", "180px");

  colorLabel = createDiv("Scale Color Range");
  colorLabel.style("font-size", "16px");
  colorLabel.style("font-weight", "bold");
  colorLabel.style("color", "white");
  colorLabel.position(15, 135);

  colorSlider = createSlider(0, 255, random(255), 1);
  colorSlider.position(10, 155);
  colorSlider.style("width", "180px");
}

function draw() {
  background("black");
  isAnimated = checkbox.checked(); // now we know if it is animated
  if (!isAnimated) sizeSlider.value(25); // if it is not animated set to default state
  cols = sizeSlider.value(); // set col width based on slider slider values
  rows = cols; // square based on our rows
  sz = Math.round(windowWidth / cols); // size is a whole integer so we can calculate how many squares are need to fill the width of the screen
  colorMap = make2dArray(cols, rows); // here is where we get an array of arrays with mapped colors, need to do it in the draw function so state updates easily
  animationSpeed = speedSlider.value(); // get our framerate speed here

  if (isAnimated) {
    // decide if we hide our sliders or not
    speedLabel.show() && speedSlider.show();
    sizeLabel.show() && sizeSlider.show();
    colorLabel.show() && colorSlider.show();
  } else {
    speedLabel.hide() && speedSlider.hide();
    sizeLabel.hide() && sizeSlider.hide();
    colorLabel.hide() && colorSlider.hide();
  }

  translate(0, height / 4); // just render drawing on bottom half of screen for easier mobile readiness

  // go through our color maping and create a square for each element
  for (let i = 0; i < colorMap.length; i++) {
    for (let j = 0; j < colorMap[i][j]; j++) {
      const y = i * sz;
      const x = j * sz;
      isAnimated
        ? fill(random(colorMap[i][j], colorSlider.value()))
        : fill(colorMap[i][j]);
      rect(x, y, sz, sz);
    }
  }

  frameRate(animationSpeed);
}
