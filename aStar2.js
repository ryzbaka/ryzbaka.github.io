let currentX
let currentY
let pathQueue=[]
let startid
let goalid
let goalX
let goalY
let state=false
let walls=[30,31,32,33,34,44,54,53,6,16,26,,36,46,56,,66,76,75,74,73,51,52,61,71]
//add a way to tackle start and end node being the same
//add a way to place blocks
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
    this.fValue=null
    this.isCandidate=false
    this.isWall=false
    this.gCost=null
    this.hCost=null
  }
  changeColor(someColor){
    this.color=someColor
  }
  show(){
    fill(this.color)
    rect(this.x,this.y,50,50)
    fill('black')
    text(this.id,this.x,this.y)
  }
}
const nodes=[]
function setup() {
  createCanvas(550, 550);
  background('lightgrey');
  let count=0;
  rectMode(CENTER)
  stroke('white')
  fill('lightblue')
  for(let i=50;i<550;i+=50){
    const colNodes=[]
    for(let j=50;j<550;j+=50){
      rect(i,j,50,50)
      fill('black')
      text(count,i,j)
      fill('lightblue')
      const newNode=new Node(i,j,count)
      count+=1
      colNodes.push(newNode)
    }
    nodes.push(colNodes)
  }
  for(let i=0;i<10;i++){
    for(let j=0;j<10;j++){
      if(walls.includes(nodes[i][j].id)){
        nodes[i][j].isWall=true
        updateColor(nodes[i][j])
        console.log(nodes[i][j])
        drawNodes()
      }
    }
  }
}

function updateColor(someNode){
    if(someNode.processed){
        someNode.color="darkgrey"
    }
    else{
        someNode.color="lightblue"
    }
    if(someNode.isGoal){
        someNode.color="yellow"
    }
    if(someNode.isStart){
        someNode.color="blue"
    }
    if(someNode.isCandidate){
      someNode.color="hotpink"
    }
    if(someNode.inPath){
        someNode.color="lightgreen"
    }
    if(someNode.isWall){
      someNode.color="black"
    }
}
function drawNodes(){
    for(let i=0;i<10;i++){
        for(let j=0;j<10;j++){
            nodes[i][j].show()
        }
    }
}

function calcF(someNode,x1,y1,diagonal){
  //this function will take the indices of someNode and calculate euclidiean distance from someNode to target with goalX goalY
  // and then assign it to someNode's fValue
  x2=goalX
  y2=goalY
  fvalue=((x2-x1)**2)+((y2-y1)**2) //heuristic
  this.hCost=fvalue
  if(diagonal){
    this.gCost=nodes[currentX][currentY].gCost+14
    fvalue=this.gCost+this.hCost
  }
  else{
    this.gCost=nodes[currentX][currentY].gCost+10
    fvalue=this.gCost+this.hCost
  }
  someNode.fValue=fvalue
  someNode.I=x1
  someNode.J=y1
}
function scanNeighbours(someNode){
  //use exception handling to scan neighbours and assign them their f values
  //update currentX and currentY to the node that has the minimum f-value
  //use the calcF() function to do stuff.
  someNode.processed=true
  updateColor(someNode)
  drawNodes()
  let scanJ=currentY-1
  let neighbours=[]
  for(let i=0;i<3;i++){
    let scanI=currentX-1
    for(let j=0;j<3;j++){
      try{
        if(nodes[scanI][scanJ]!=undefined && !nodes[scanI][scanJ].isWall && !nodes[scanI][scanJ].inPath && !nodes[scanI][scanJ].processed){
          if(scanI!=currentX || scanJ!=currentY){
            if(i+j===2 || i===j){
              calcF(nodes[scanI][scanJ],scanI,scanJ,true)
            }//last change here
            else{
              calcF(nodes[scanI][scanJ],scanI,scanJ,false)
            }
            neighbours.push(nodes[scanI][scanJ])
            scanI+=1
          }
          else{
            scanI+=1
          }
        }
        else{
          scanI+=1
        }
      }catch(err){
        scanI+=1
      }
    }
    scanJ+=1
  }
  //at this point neighbours have been scanned and their values have been computed
  let minF=200000;
  let minI=null;
  let minJ=null
  let mins=[]
  neighbours.forEach((element,index)=>{
    if(element.fValue<minF){
      mins=[]
      minF=element.fValue
      mins.push(element)
    }
    else if(element.fValue===minF){
      mins.push(element)
    }
  })
  if(mins.length>1){
    minH=200000
    mins.forEach((element,index)=>{
      if(element.hCost<=minH){
        minH=element.hCost
        minI=element.I
        minJ=element.J
      }
    })
  }
  else{
    minI=mins[0].I
    minJ=mins[0].J
  }
  //at this point we have determined the next node
  nodes[minI][minJ].inPath=true
  //nodes[minI][minJ].processed=true
  pathQueue.push(nodes[minI][minJ])
  neighbours.forEach((element,id)=>{
    element.isCandidate=false
    //element.processed=true
    updateColor(element)
    drawNodes()
  })
  currentX=minI
  currentY=minJ
  console.log(nodes[currentX][currentY])
  if(currentX==goalX &&currentY==goalY){
    nodes[currentX][currentY].color="magenta"
    drawNodes()
    state=true
    nextButton.setAttribute("disabled","true")
    nextFiveButton.setAttribute("disabled","true")
  }
}
function restrictedDraw() {
    if(!state){//if process has not been completed
      if(nodes[currentX][currentY].isStart){
        nodes[currentX][currentY].inPath=true
        pathQueue.push(nodes[currentX][currentY])
        updateColor(nodes[currentX][currentY])
        nodes[currentX][currentY].gCost=10//this one's new
      }
      scanNeighbours(nodes[currentX][currentY])
      drawNodes()
    }
}