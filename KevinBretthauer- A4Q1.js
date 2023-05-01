// Create a canvas with a size of 400x400 pixels
function setup() {
  createCanvas(400, 400);

  // Set the angle mode to degrees
  angleMode(DEGREES);

  // Define three different star objects
  star1 = {
    x: 50, // x-coordinate of the star's center
    y: 50, // y-coordinate of the star's center
    scale: 0.5, // scale factor for the star's size
    points: 18, // number of points the star should have
    startAngle: 20, // starting angle of the first point
    fill: "teal", // color to fill the star with
  };
  
  star2 = {
    x: 120,
    y: 50,
    scale: 0.5,
    points: 5,
    startAngle: 20,
    fill: "yellow",
  };
  
  star3 = {
    x: 95,
    y: 100,
    scale: 0.5,
    points: 8,
    startAngle: 20,
    fill: "orange",
  };
}

function draw() {
  // Set the background color to light gray
  background(220);
  
  // Call the addStar function for each star object
  addStar(star1);
  addStar(star2);
  addStar(star3);
}

// Function to add a star shape to the canvas
function addStar(star){
  push();
  // Move the origin to the star's center position
  translate(star.x, star.y);
  // Scale the star based on the provided scale factor
  scale(star.scale);
  // Rotate the star by the starting angle of the first point
  rotate(star.startAngle);
  // Fill the star with the specified color and no stroke
  fill(star.fill);
  noStroke();
  // Calculate the angle between each point of the star
  let addAngle = 360/star.points;
  // Loop through the number of points and add a triangle at each angle
  for (let i = 0; i < star.points; i++){
    rotate(addAngle)
    triangle(0, 50, 20, 0, -20, 0)
  }
  // Restore the transformation state to its previous value
  pop();
}

