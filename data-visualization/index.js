let plotPoints = [];

// create our particle class
class PlotPoint {
  constructor() {
    this.vertex;
    this.plotPointSize = 10;
    this.text;
    this.itemIndex;
    this.location
  }

  show() {
    noFill()
    stroke('white')
    console.log(this.location)
    ellipse(this.location.x, this.location.y, this.plotPointSize)
  }
}

// fetch our crypto data
const CRYPTO_DATA = fetch("https://api2.binance.com/api/v3/ticker/24hr")
  .then((response) => response.json()
);

function preload() {
  CRYPTO_DATA.then((data) => {
    // take a look at the console to see our JSON data
    console.log(data);
    // some data comes back as a string so we convert to integer with parseInt

    // build PlotPoint objects with characteristics from our crypto data
    if (data.length > 0) {
      let itemIndex = 0
      for (var i = 0; i < data.length; i++) {

        let lastPrice = Math.round(parseInt(data[i].lastPrice))
        // let plotPointSize = (parseInt(data[i].quoteVolume) / 10000)
        let symbol = data[i].symbol

        if (lastPrice > 0) { // we only want values greater than zero
          plotPoints[itemIndex] = new PlotPoint();
          plotPoints[itemIndex].text = `${symbol} at $${lastPrice}`
          // plotPoints[itemIndex].plotPointSize = plotPointSize
          this.itemIndex = itemIndex
          // this.location = createVector(itemIndex * 10, lastPrice)
          this.location = createVector(itemIndex * 10, 10, 0)
          itemIndex++
        }
      }
    }
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";

  console.log('sorted', plotPoints)
}

function draw() {
  // background('black')
  push()
  // translate(width / 2, height / 2)
  for (let i = 1; i < plotPoints.length; i++) {
    plotPoints[i].show();
  }
  pop()
}
