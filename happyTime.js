const backgroundDetails={freeze:false}
function setup() {
  createCanvas(400,400)
}
function mouseReleased(){
    backgroundDetails.freeze=true
}
function draw() {
  const mappedX=map(mouseX,0,400,0,255)
  const mappedY=map(mouseY,0,400,0,255)
  backgroundDetails.r=mappedX
  backgroundDetails.g=mappedY
  backgroundDetails.b=mappedX  
  if(mouseIsPressed){
    fill(random(0,255),random(0,255),random(0,255),70)
    stroke('white')
    ellipse(mouseX,mouseY,50,50)
  }
  if(!backgroundDetails.freeze){
  background(mappedX,mappedY,mappedX-mappedY+100)
  }
  point(random(0,400),random(0,400))
}
