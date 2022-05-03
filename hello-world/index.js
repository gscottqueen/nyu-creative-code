function setup() {
  createCanvas(400, 400);
  strokeWeight(10);
  rectMode(CENTER)
} // initializer

function draw() {
  background(200);
  point(10,10);// top left
  point(390,10); // top right
  point(10,390); // bottom left
  point(390,390); // bottom right
  quad(10,10,200,10,390,390,200,390);
  triangle(200,10,200, 10, 10, 200);
  line(10,10,390,390);
  ellipse(200,200,200,200);
  rect(200,200,100,100);
  arc(200, 200, 100, 100, 0, PI)// angles are in radians rather than degrees radians(degree) converts to radians equivilent
  arc(100, 100, 50, 50, 0, 2*PI)
}
