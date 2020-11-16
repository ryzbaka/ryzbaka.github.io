let backgroundSketch;

function setup(){
    backgroundSketch = createCanvas(windowWidth,windowHeight);
    backgroundSketch.position(0,0)
    backgroundSketch.style('z-index',-1);
}

function draw(){
    fill('hotpink');
    // ellipse(mouseX,mouseY,20,20)
    ellipse(random(windowWidth),random(windowHeight),20,20)
    fill(20,20,20,20)
    rect(0,0,windowWidth,windowHeight)    
}
