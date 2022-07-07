// Symmetry corresponding to the number of reflections. Change the number for different number of reflections 
let symmetry = 6;   

let angle = 360 / symmetry;
let saveButton, clearButton, mouseButton, keyboardButton;
let slider;

function setup() { 
  backgroundSketch = createCanvas(windowWidth,windowHeight);
  backgroundSketch.position(0,0)
  backgroundSketch.style('z-index',-1);
//   createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  backgroundSketch.background(0);
  stroke("hotpink");
  strokeWeight(50);
//   // Creating the save button for the file
//   saveButton = createButton('save');
//   saveButton.mousePressed(saveFile);

//   // Creating the clear screen button
//   clearButton = createButton('clear');
//   clearButton.mousePressed(clearScreen);

//   // Creating the button for Full Screen
//   fullscreenButton = createButton('Full Screen');
//   fullscreenButton.mousePressed(screenFull);

//   // Setting up the slider for the thickness of the brush
//   brushSizeSlider = createButton('Brush Size Slider');
//   sizeSlider = createSlider(1, 32, 4, 0.1);
}

// // Save File Function
// function saveFile() {
//   save('design.jpg');
// }

// // Clear Screen function
// function clearScreen() {
//   background(0);
// }

// // Full Screen Function
// function screenFull() {
//   let fs = fullscreen();
//   fullscreen(!fs);
// }
t = 0;
function draw() {
  translate(width / 2, height / 2);
  pMx = map(noise(t),0,1,0,width)
  pMy = map(noise(t,t),0,1,0,height)
  t+=0.01
  Mx = map(noise(t),0,1,0,width);
  My = map(noise(t,t),0,1,0,height);
  if (Mx > 0 && Mx < width && My > 0 && My < height) {
    let mx = Mx - width / 2;
    let my = My - height / 2;
    let pmx = pMx - width / 2;
    let pmy = pMy - height / 2;
    
    // if (mouseIsPressed) {
      for (let i = 0; i < symmetry; i++) {
        rotate(angle);
        // let sw = sizeSlider.value();
        strokeWeight(20);
        line(mx, my, pmx, pmy);
        fill("darkgrey")
        strokeWeight(5)
        stroke("black")
        ellipse(mx,my,50,50)
        strokeWeight(20)
        stroke("hotpink")
        push();
        scale(1, -1);
        line(mx, my, pmx, pmy);
        pop();
      }
    // }
  }
}
