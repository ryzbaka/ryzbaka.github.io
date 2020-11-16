let backgroundSketch;
let amplitude;
let song;
let xOffset = 0;
let xIncrement = 0.01;
function preload(){
    song = loadSound("audio.mp3")
}
function setup(){
    backgroundSketch = createCanvas(windowWidth,windowHeight);
    backgroundSketch.position(0,0)
    backgroundSketch.style('z-index',-1);
    amplitude = new p5.Amplitude();
}

function mousePressed(){
    if(song.isPlaying()){
        song.stop();
        fill('red')
        ellipse(mouseX,mouseY,30,30)

    }else{
        song.play();
        fill('green')
        ellipse(mouseX,mouseY,30,30)
    }
}

function draw(){
    const level = map(amplitude.getLevel(),0,1,50,200)
    fill(255,105,180,map(level,50,200,0,100));
    // ellipse(windowWidth/2,windowHeight/2,level,level)
    xOffset+=xIncrement;
    const xPos = map(noise(xOffset),0,1,0,windowWidth);
    const yPos = map(noise(xOffset,xOffset),0,1,0,windowHeight);
    ellipse(xPos,yPos,level,level)
    fill(20,20,20,20)
    rect(0,0,windowWidth,windowHeight)    
}
