// Set the number of rows and columns for the grid
let rows = 3;
let columns = 5;

function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);

  // Calculate the width and height of each cell in the grid
  widths = width / columns;
  heights = height / rows;

  // Stop the draw loop from running automatically
  noLoop();

  // Define three stars with different properties
  star1 = {
    startx: 50,
    starty: 65,
    scale: 1,
    points: 5,
    startAngle: 20,
    fill: "orange",
  };
  star2 = {
    startx: 25,
    starty: 85,
    scale: 1.5,
    points: 8,
    startAngle: 20,
    fill: "purple",
  };
  star3 = {
    startx: 30,
    starty: 35,
    scale: 2,
    points: 10,
    startAngle: 20,
    fill: "teal",
  };
}

function draw() {
  background(220);

  // Loop through each cell in the grid and draw stars in each cell
  for (let rowsDrawn = 0; rowsDrawn < rows; rowsDrawn++) {
    let offsetDown = rowsDrawn * heights;

    star1.y = star1.starty + offsetDown;
    star2.y = star2.starty + offsetDown;
    star3.y = star3.starty + offsetDown;
    for (let columnsDrawn = 0; columnsDrawn < columns; columnsDrawn++) {
      let offsetRight = columnsDrawn * widths;
      star1.x = star1.startx + offsetRight;
      star2.x = star2.startx + offsetRight;
      star3.x = star3.startx + offsetRight;

      // Add stars to the current cell of the grid
      addStar(star3);
      addStar(star2);
      addStar(star1);
    }
  }
}

function addStar(star) {
  push();
  fill(star.fill);

  // Translate to the center of the star's position and apply a rotation
  translate(star.x, star.y);
  rotate(star.startAngle);

  // Draw a rectangle and scale it
  rect(0, 0, 10);
  scale(star.scale);

  // Calculate the angle between each point on the star
  let addangle = 360 / star.points;
  for (let linesDrawn = 0; linesDrawn < star.points; linesDrawn++) {
    // Rotate and draw each point of the star
    rotate(addangle);
    noStroke();
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
}

