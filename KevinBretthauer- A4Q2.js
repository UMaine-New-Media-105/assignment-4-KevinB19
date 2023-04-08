function setup() {
  createCanvas(960, 540);

  angleMode(DEGREES);
  noLoop();
  tR = 3;
  tC = 5;
  tW = width / tR;
  tH = height / tC;

  star1 = {
    x: 50,
    y: 50,
    scale: 0.5,
    points: 8,
    startAngle: 20,
    fill: "teal",
  };

  star2 = {
    x: 20,
    y: 20,
    scale: 0.25,
    points: 5,
    startAngle: 69,
    fill: "blue",
  };

  star3 = {
    x: 120,
    y: 40,
    scale: 0.75,
    points: 18,
    startAngle: 60,
    fill: "orange",
  };
}

function draw() {
  background(220);
  for (let i = 0; i < tC; i++) {
    for (let j = 0; j < tR; j++) {
      let oR = i * tW
      let oL = j * tH
      star1.x = star1.x + oR;
      star2.x = star2.x + oR;
      star3.x = star3.x + oR;
      star1.y = star1.y + oL;
      star2.y = star2.y + oL;
      star3.y = star3.y + oL;
      addStar(star1);
      addStar(star2);
      addStar(star3);
    }
  }
}

function addStar(star) {
  push();
  translate(star.x, star.y);
  scale(star.scale);
  rotate(star.startAngle);
  fill(star.fill);
  noStroke();
  let addAngle = 360 / star.points;
  for (let i = 0; i < star.points; i++) {
    rotate(addAngle);
    triangle(0, 50, 20, 0, -20, 0);
  }
  pop();
}
