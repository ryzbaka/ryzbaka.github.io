let backgroundColor;
let backgroundSketch;
function setup(){
    backgroundColor=color(255,204,0,20)
    backgroundSketch = createCanvas(windowWidth,windowHeight);
    backgroundSketch.position(0,0);
    backgroundSketch.style('z-index',-1);
    backgroundSketch.background(backgroundColor);
}
function draw(){
    if(count===3){
        message.innerText="I said don't click the button";
        backgroundColor=color(0,200,0,20);
    }
    else if(count===10){
        message.innerText="You don't listen do you.";
        backgroundColor=color(200,0,0,20);
    }
    else{
        message.innerText=count;
    }
    fill(backgroundColor);
    rect(0,0,windowWidth,windowHeight);
}
