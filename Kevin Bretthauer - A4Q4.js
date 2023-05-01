function setup() {
  createCanvas(960, 540);
  noLoop();
  sprites = ["4 point", "5 point", "6 point", "8 point", "6 point", "5 point", "4 point"];
  spritesPerRow = 16;
  offsetLeft = width / spritesPerRow;
}

function draw() {
  background("midnightblue");

  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 5;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 0);
  }
  
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 3;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 100);
  }
  
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 3;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 200);
  }
  
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 3;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 300);
  }
  
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 3;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 400);
  }
  
  for (let counter = 0; counter < spritesPerRow; counter++) {
    let thisSprite = counter % 3;
    chooseSprite(sprites[thisSprite], counter * offsetLeft, 500);
  }
}

function chooseSprite(spriteName, spriteX, spriteY) {
  if (spriteName == "4 point") {
    add4point(spriteX, spriteY);
  } else if (spriteName === "5 point") {
    add5point(spriteX, spriteY);
  } else if (spriteName == "6 point") {
    add6point(spriteX, spriteY);
  } else if (spriteName == "8 point") {
    add8point(spriteX, spriteY);
  }
}

function add4point(x, y) {
  push();
  fill("red");
  
  // Translate to the center of the star's position and apply a rotation
  translate(x, y);
  //rotate(20);
  
  // Draw a rectangle and scale it
  rect(0, 0, 10);
  
  
  // Calculate the angle between each point on the star
  let addangle = 360 / 4;
  for (let linesDrawn = 0; linesDrawn < 4; linesDrawn++) {
    
    // Rotate and draw each point of the star
    rotate(addangle);
    noStroke()
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
}

function add5point(x, y) {
  push();
  fill("red");
  
  // Translate to the center of the star's position and apply a rotation
  translate(x, y);
  //rotate(20);
  
  // Draw a rectangle and scale it
  rect(0, 0, 10);
  
  
  // Calculate the angle between each point on the star
  let addangle = 360 / 5;
  for (let linesDrawn = 0; linesDrawn < 5; linesDrawn++) {
    
    // Rotate and draw each point of the star
    rotate(addangle);
    noStroke()
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
}

function add6point(x, y) {
  push();
  fill("red");
  
  // Translate to the center of the star's position and apply a rotation
  translate(x, y);
  //rotate(20);
  
  // Draw a rectangle and scale it
  rect(0, 0, 10);
  
  
  // Calculate the angle between each point on the star
  let addangle = 360 / 6;
  for (let linesDrawn = 0; linesDrawn < 6; linesDrawn++) {
    
    // Rotate and draw each point of the star
    rotate(addangle);
    noStroke()
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
}

function add8point(x, y) {
  push();
  fill("red");
  
  // Translate to the center of the star's position and apply a rotation
  translate(x, y);
  //rotate(20);
  
  // Draw a rectangle and scale it
  rect(0, 0, 10);
  
  
  // Calculate the angle between each point on the star
  let addangle = 360 / 8;
  for (let linesDrawn = 0; linesDrawn < 8; linesDrawn++) {
    
    // Rotate and draw each point of the star
    rotate(addangle);
    noStroke()
    triangle(0, -20, 10, 0, -10, 0);
  }
  pop();
}
