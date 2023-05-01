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
    startx: 50,  // Starting x position of the star in a cell
    starty: 65,  // Starting y position of the star in a cell
    scale: 1,    // Scaling factor for the size of the star
    points: random(4, 5),     // Number of points the star has
    startAngle: random(360),  // Starting rotation angle of the star
    fill: "orange",           // Color of the star
  };
  star2 = {
    startx: 25,
    starty: 85,
    scale: 1.5,
    points: random(6,10),
    startAngle: random(360),
    fill: "purple",
  };
  star3 = {
    startx: 30,
    starty: 35,
    scale: 2,
    points: random(10,16),
    startAngle: random(360),
    fill: "teal",
  };
}

function draw() {
  background("pink");
  
  // Loop through each cell in the grid and draw stars in each cell
  for (let rowsDrawn = 0; rowsDrawn < rows; rowsDrawn++) {
    let offsetDown = rowsDrawn * heights;

    star1.y = star1.starty + offsetDown;  // Y position of star1 in the current row
    star2.y = star2.starty + offsetDown;  // Y position of star2 in the current row
    star3.y = star3.starty + offsetDown;  // Y position of star3 in the current row
    for (let columnsDrawn = 0; columnsDrawn < columns; columnsDrawn++) {
      let offsetRight = columnsDrawn * widths;
      star1.x = star1.startx + offsetRight;  // X position of star1 in the current column
      star2.x = star2.startx + offsetRight;  // X position of star2 in the current column
      star3.x = star3.startx + offsetRight;  // X position of star3 in the current column
      
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
    noStroke()
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
} 
