const particles = [];
let particle;
let angle = 10;
let brightness = 255;
let velocity = 0;

function pulse(brightness) {
  if (brightness === 255) {
    velocity += -1;
  }
  if (brightness === 1) {
    velocity += 1;
  }
}

function gravity(position) {
  if (Math.sign(position) === -1) {
    position += 1;
  } else {
    position += -1;
  }
  return position
}

function density(size, positions) {
  if (Object.values(positions).every((position) => position === 0)) {
    console.log(size)
    size = 0;
  } else {
    size += -0.001
  }
  return size
}

class Particle {
  constructor(
    pos,
    sz,
    // gravity
  ) {
    this.name = "Ball";
    this.color = 255;
    this.sz = sz;
    this.pos = pos;
    // this.gravity = gravity;
  }
}

function setup() {
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  // instantiate WEBGL
  createCanvas(windowWidth, windowHeight, WEBGL);
  // set to degrees for easy mode
  angleMode(DEGREES);
  camera(-width / 3, width - 500, angle);

  // create our particles
  for (let i = 0; i < 15; i++) {
    // form a new Particle object
    const particle = new Particle();
    // set particle positions x, y, and z
    particle.pos = createVector(
      random(-width * 2, width * 2),
      random(-width * 2, width * 2),
      random(-width * 2, width * 2)
    );
    // generate particle size
    particle.sz = random(30, 50);
    // add particle to array
    particles[i] = particle;
  }

  window.setInterval(function(){
      // for (let i = 0; i < 15; i++) {
    // form a new Particle object
    const particle = new Particle();
    // set particle positions x, y, and z
    particle.pos = createVector(
      random(-width * 2, width * 2),
      random(-width * 2, width * 2),
      random(-width * 2, width * 2)
    );
    // generate particle size
    particle.sz = random(30, 50);
    // add particle to array
    particles.push(particle)
  // }
  }, 100);
    // no need for strokes
    noStroke();
  }

function draw() {
  // set up mutable location coordinate variables
  let locX, locY, locZ;
  // click screen to rotate angle
  orbitControl(4, 4);
  // start our angle from the global variable
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  // establish initial material characteristics
  // make them all shinny objects
  shininess(20);
  // what color gets reflected
  specularColor(255);
  specularMaterial(255);

  // from our particle objects create spheres
  for (let i = 0; i < particles.length; i++) {
    // get the particle object referenced from current index
    particle = particles[i];
    // mutate loc variables
    locX = particle.pos.x;
    locY = particle.pos.y;
    locZ = particle.pos.z;
    // move to the loc coordinates
    push();
    translate(locX, locY, locZ);
    // get pulsing light from center sphere
    // pointLight(brightness, brightness, brightness, 0, 0, 0);
    pointLight(255, 255, 255, 0, 0, 0);

    // create sphere
    sphere(particle.sz);
    particle.pos.x = gravity(particle.pos.x)
    particle.pos.y = gravity(particle.pos.y)
    particle.pos.z = gravity(particle.pos.z)
    // console.log(particle.sz)
    if (particle.sz <= 0) {
      // remove this particle from the array
      particles.pop(i)
    } else {
      // increase denisty of particle to 0
     particle.sz = density(particle.sz, particle.pos)
    }

    particle.sz = density(particle.sz, particle.pos)

    // console.log({particles})
    pop();
  }
  // create center aggitating, sphere
  // push();
  // pulse our light
  // ambientLight(brightness, brightness, brightness);
  // shininess(255);
  // // what color gets reflected
  // specularColor(255);
  // specularMaterial(255);
  // create a pointlight on the outside of sphere
  // const point = random(360)
  // pointLight(255, 255, 255, -angle, angle, angle);
  // pointLight(255, 255, 255, angle, -angle, angle);
  // pointLight(255, 255, 255, -point, point, point);
  // pointLight(255, 255, 255, angle, mouseY);
  // ambientLight(255);
  // randomly translate coordinates to create a vibrating effect
  // translate(random(500), random(500), random(500));
  // create our inner sphere
  for (i = 0; i < 4; i++) {
    let point = i * 50;
      for (j = 0; j < 1000; j++) {
        push();
        // ambientLight(brightness, brightness, brightness);

        ambientLight(255);
        translate(random(-point, point), random(-point, point), random(-point, point));
        sphere(1);
        pop();
    }
  }

  // establish outer sphere material characteristics
  // make them all shinny objects
  shininess(20);
  // what color gets reflected
  specularColor(255);
  specularMaterial(255);
  // create a pointlight on the outside of sphere
  pointLight(255, 255, 255, width, width, width);
  // create our sphere
  sphere(width);

  // increment variables
  brightness += velocity;
  angle += 0.1;
  // check our brightness value and handle pulsing
  pulse(brightness);
}
