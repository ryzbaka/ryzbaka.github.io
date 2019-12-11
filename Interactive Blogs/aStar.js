let currentX=0
let currentY=0
let pathQueue=[]
let startid
let goalid
let startX
let startY
let goalX
let goalY
class Node{
  constructor(i,j,identifier){
    this.color='lightblue'
    this.x=i
    this.y=j
    this.id=identifier
    this.processed=false
    this.inPath=false
    this.isGoal=false
    this.isStart=false
  }
  changeColor(someColor){
    this.color=someColor
  }
  show(){
    fill(this.color)
    rect(this.x,this.y,50,50)
    fill('white')
    text(this.id,this.x,this.y)
  }
}
const nodes=[]
function setup() {
  createCanvas(550, 550);
  background('lightgrey');
  let count=0;
  rectMode(CENTER)
  stroke('black')
  fill('lightblue')
  for(let i=50;i<550;i+=50){
    const colNodes=[]
    for(let j=50;j<550;j+=50){
      rect(i,j,50,50)
      fill('white')
      text(count,i,j)
      fill('lightblue')
      const newNode=new Node(i,j,count)
      count+=1
      colNodes.push(newNode)
    }
    nodes.push(colNodes)
  }
}
function processNode(someNode){
    someNode.processed=true
    updateColor(someNode)//updates the color value of a node
    //based on weather it has been processed or has been added to path
}
function updateColor(someNode){
    if(someNode.processed){
        someNode.color="green"
    }
    else{
        someNode.color="lightblue"
    }
    if(someNode.inPath){
        someNode.color="lightgrey"
    }
    if(someNode.isGoal){
        someNode.color="golden"
    }
}
function drawNodes(){
    /*fill(this.color)
    rect(this.x,this.y,50,50)
    fill('white')
    text(this.id,this.x,this.y)*/
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            nodes[i][j].show()
        }
    }
}
function resetNodes(){
    currentX=0
    currentY=0
    pathQueue=[]
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            nodes[i][j].processed=false
            nodes[i][j].inPath=false
            updateColor(nodes[i][j])
        }
    }
    drawNodes()
}
function restrictedDraw() {
    //write code here to start with start node
    //add to path
    //calculate f value of all neighbours
    //move currentX and currentY to the index of the node with the minimum f value
}