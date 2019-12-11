let seletedBox
let displayFlag=0
class Node{
  constructor(i,j,identifier){
    this.color='lightgrey'
    this.x=i
    this.y=j
    this.id=identifier
    this.processed=false
  }
  changeColor(someColor){
    this.color=someColor
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
      count+=1
      const newNode=new Node(i,j,count)
      colNodes.push(newNode)
    }
    nodes.push(colNodes)
  }
  if(displayFlag===0){
    console.log(nodes)
    displayFlag=1
  }
}
function restrictedDraw(){
    console.log('lmao')
    console.log(nodes)
}