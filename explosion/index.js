let craters = []
let charge = 0

class Crater {
  constructor(position, size) {
    this.name = "crater";
    this.position = position;
    this.size = size;
  }
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  createCanvas(windowWidth, windowHeight);
  noStroke()
}

function draw() {
  background(0);
  // increase slider value while key=32 is pressed
  fill(255, 255, 255, 81)
  textStyle(ITALIC);
  textSize(width / 4);
  text(`${charge}`, 0, height)
  fill(255, 255, 255)
  textSize(22);
  text(`Press and Hold Space Bar`, 0, height)

  // draw explosion
  for (let i = 0; i < allSprites.length; i++) {
    if (keyIsDown(32)) {
      allSprites[i].attractionPoint(1, mouseX, mouseY);
    }

    // gravity
    allSprites[i].addSpeed(0.1, 90);
    if (allSprites[i].position.y > height) {
      allSprites[i].velocity.y *= -1;
    }
    // any code that removes sprites should be
    // the *last* thing in the loop!
    if (allSprites[i].position.x > width ||
        allSprites[i].position.x < 0) {
      allSprites[i].remove();
    }
  }

  // draw block craters
  craters.forEach((crater) => {
    console.log(crater)
    fill('white')

    rect(
      crater.position.x - crater.size / 2,
      crater.position.y - crater.size / 2,
      crater.size, crater.size
    )
  })

  if (keyIsDown(32)) {
    charge++
  }
  drawSprites();
}

function mousePressed() {
  // define x, y coordinates
  const offset = charge / 2
  const x = mouseX
  const y = mouseY

  // create crater objects
  craters.push(
    new Crater(createVector(x, y, 0), offset)
  )

  // create explosion sprites
  for (let i = 0; i < charge; i++) {
    let spr = createSprite(x, y, 10, 10);
    spr.shapeColor = color(random(255));
    spr.velocity.y = random(-offset / random(10, 50) , offset / random(10, 50));
    spr.velocity.x = random(-offset / random(10, 50), offset / random(10, 50));
    spr.rotateToDirection = true;
    // spr.maxSpeed = 2;
    spr.friction = 1 ;
    spr.position.x = x;
    spr.position.y = y;
  }

  // reset our charge
  charge = 0
}
