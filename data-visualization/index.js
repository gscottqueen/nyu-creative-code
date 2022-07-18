// I didn't have any personal data so I am hitting an api endpoint for crypto values over the last 24hrs
const url = "https://api2.binance.com/api/v3/ticker/24hr";
// we will return the data and bind it to a variable
let CRYPTO_DATA;
// set up our adjustable values
const maxMarketValue = 100
const yOffset = 100
const pointSize = 10

function preload() {
  // fetch api doesn't work but we can use an http call to get our data
  httpGet(url, "json", false, function (response) {
    CRYPTO_DATA = response;
  });
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
}

function draw() {
  if (!CRYPTO_DATA) {
    return; // once we have data draw will function as expected
  }
  // take a look at the console to see our JSON data
  // console.log(CRYPTO_DATA);
  background("white");

	// legend
	text('Last Price Sold', yOffset, yOffset);
	text('Quantity Sold', width - yOffset, height - yOffset/2);
	text('0', yOffset, height - yOffset/2);

	// offset from edge of screen
	translate(0, -yOffset)

	// loop through data to display
  for (var i = 0; i < CRYPTO_DATA.length; i++) {
		// some of our data comes back as string so we convert with parseInt
		// and round to the nearest whole number
    let lastPrice = Math.round(parseInt(CRYPTO_DATA[i].lastPrice));
    let lastQty = Math.round(parseInt(CRYPTO_DATA[i].lastQty));
    let symbol = CRYPTO_DATA[i].symbol;

    if (lastPrice > maxMarketValue) { // for all points greater than our defined max value
			// create a location vector
      let location = createVector(0 + lastPrice, height - lastQty, 0)
			// draw our ellipse
			ellipse(location.x, location.y, pointSize, pointSize);
			// calculate distance mins for hover effect
      let d = dist(mouseX, mouseY, location.x, location.y - yOffset);
			// if our calculation is less than our point size based on location we display a text label
      if (d <= pointSize) {
        text(`${symbol}, $${lastPrice}.00`, location.x, location.y);
      }
    }
  }
}
