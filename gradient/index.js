const cols = 16;
const rows = 16;
const sz = 40;
let colorMap = [];

function make2dArray(cols, rows) {
  const arr = new Array(cols)
  let color = 0
  for (let i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows)
    for (let j = 0; j < arr[i].length; j++) {
      color++
      arr[i][j] = color
    }
  }
  return arr
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  // set up our canvas details
  createCanvas(windowWidth, windowHeight);
  colorMap = make2dArray(cols, rows);
  background('black')
  noStroke();
}

function draw() {
  translate(width / 4, height / 8)

  for (let i = 0; i < colorMap.length; i++) {
    for (let j = 0; j < colorMap[i][j]; j++) {
      const y = i * sz;
      const x = j * sz;
      fill(colorMap[i][j])
      rect(x, y, sz, sz)
    }
  }
  noLoop()

}
