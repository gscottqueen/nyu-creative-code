// this drawing includes an audio aspect, sound on!!
// this works best on desktop

const particles = [];
let particle, mobile;
let angle = 10;

class Particle {
  constructor(position) {
    this.name = "Ball";
    this.position = position;
    this.size = 1;
    this.color = 255;
  }

  handleParticleDetails(particle, i) {
    // set particle positions x, y, and z
    particle.pos = createVector(
      random(-width * 2, width * 2),
      random(-width * 2, width * 2),
      random(-width * 2, width * 2)
    );
    // generate particle size
    particle.sz = mobile ? random(10, 15) : random(30, 50);
    // add particle to array
    if (i) {
			// if there is an index, it is likely part of an array so we just place it back in at that index
      particles[i] = particle;
    } else {
			// if there is no index, we just need to append it to the particles array
      particles.push(particle)
    }
  }

  handleGravity(position) {
		// Math.sign helps check if the number is negative
    if (Math.sign(position) === -1) {
			// if number is neg, add 1
      position += mobile ? 0.1 : 0.5;
    } else {
			// otherwise the number is positive so we remove one
      position += mobile ? -0.1 : -0.5;
    }
    return position;
  }
}

// function preload() {
//   // Load the sound file
//   soundFormats('mp3');
// 	// https://archive.org/details/sleep-walk
//   song = loadSound('sleep-walk.mp3');
// }

function setup() {
	// sets the volume of the loaded sound
  // outputVolume(0.1);
	// song.play(); // autoplay
	// song.loop();
  // remove default browser margin on the body element
  // so our canvas fits snug to the windows 0,0 index
  document.getElementsByTagName("body")[0].style = "margin: 0px";
  // instantiate WEBGL
  createCanvas(windowWidth, windowHeight, WEBGL);
  // set to degrees for easy mode
  angleMode(DEGREES);
	// try to handle mobile somewhat, not ideal
  mobile = windowWidth < 900 ? true : false
  console.log(mobile)
  mobile ?
    camera(-width, width / 2 - 100, angle) :
    camera(-width / 3, width - 500, angle);

  // create our initial particles array
  for (let i = 0; i < 15; i++) {
    // form a new Particle object
    const particle = new Particle();
    particle.handleParticleDetails(particle, i);
  }

  // add more particles every 100ms
  window.setInterval(function () {
    // form a new Particle object
    const particle = new Particle();
    // include it's details
    particle.handleParticleDetails(particle);
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
    push(); // do this in a push+pop to set back origin each time
    translate(locX, locY, locZ);
    // set up where our light source for these particles comes from, center origin
    pointLight(255, 255, 255, 0, 0, 0);
    // create sphere
    sphere(particle.sz);
    // update position adding gravity each time
    // this will pull the particles to the center allong our axis
    particle.pos.x = particle.handleGravity(particle.pos.x);
    particle.pos.y = particle.handleGravity(particle.pos.y);
    particle.pos.z = particle.handleGravity(particle.pos.z);
    pop();
  }
  // create our inner hypercube square
  for (i = 0; i < 4; i++) {
    // each time increase size by 50x
    let coordinate = mobile ? i * 10 : i * 50;
    // create x number of spheres per square
    for (j = 0; j < 500; j++) {
      push();
      ambientLight(255);
      // we limit the location by square dimensions
      translate(
        random(-coordinate, coordinate),
        random(-coordinate, coordinate),
        random(-coordinate, coordinate)
      );
      // create a single pixel sphere
      sphere(mobile ? 0.3 : 1.5);
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
  angle += 0.07;
}
