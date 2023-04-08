function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  star1 = {
    x: 50,
    y: 50,
    scale: 0.5,
    points: 18,
    startAngle: 20,
    fill: "teal",
  };
}

function draw() {
  background(220);
  addStar(star1);
  
}

function addStar(star){
  push();
  translate(star.x, star.y);
  scale(star.scale);
  rotate(star.startAngle);
  fill(star.fill);
  noStroke();
  let addAngle = 360/star.points;
  for (let i = 0; i < star.points; i++){
    rotate(addAngle)
    triangle(0, 50, 20, 0, -20, 0)
  }
  pop();
}
