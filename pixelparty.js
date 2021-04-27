let backgroundColor;
let foregroundColor;
class Cell{
  constructor(x,y,s,alive,backgroundC,foregroundC){
    this.alive = alive
    this.x = x;
    this.y = y;
    this.s = s;
    this.foreground = foregroundC
    this.background = backgroundC
  }
  render(x,y,s){
    // stroke("red")
    noStroke()
    if(this.alive){
      fill(this.foreground)
    }else{
      fill(this.background)
    }
    rect(this.x,this.y,this.s,this.s)
  }
  setStatus(status){
    this.alive = status;
  }
}
class Grid{
  constructor(width,height,s){
    this.width=width;
    this.height=height;
    this.s=s //length of one side of a cell
    this.grid = []
  }
  init(){
    let backgroundC = color(random(255),random(255),random(255))
    let foregroundC = color(random(255),random(255),random(255))
    for(let i=0;i<this.width;i+=this.s){
      let row = []
      for(let j=0;j<this.height;j+=this.s){
        let randVal = random(100);
        let status;
        if(parseInt(randVal)%5==0){
          status = true
        }else{
          status = false
        }
        let cell = new Cell(i,j,this.s,status,backgroundC,foregroundC);
        row.push(cell)
      }//end of second for loop
      this.grid.push(row);
    }//end of first for loop
  }
  render(){
    this.grid.forEach((row,index)=>{
      row.forEach((cell,index)=>{
        cell.render();
      })
    })
  }
  step(){
    this.grid.forEach((row,index1)=>{
      row.forEach((cell,index2)=>{
        let neighbors = [];
        if(index2>0){
          neighbors.push(row[index2-1]);//left
        }
        if(index2<row.length-1){
          neighbors.push(row[index2+1]);//right
        }
        if(index1>0){
          neighbors.push(this.grid[index1-1][index2])
        }
        if(index1<this.grid.length-1){
          neighbors.push(this.grid[index1+1][index2])
        }
        let numAlive=0;
        neighbors.forEach((neighbor,index)=>{
          if(neighbor.alive){
            numAlive+=1
          }
        })
        if(numAlive<2){
          cell.setStatus(false)
        }
        if((numAlive==2)||(numAlive==3)){
          cell.setStatus(true)
        }
        if(numAlive>3){
          cell.setStatus(false)
        }
      })
    })
  }
}
let g;
function setup() {
  createCanvas(windowWidth, windowHeight);
  g = new Grid(width,height,30)
  background(0);
  g.init();
  g.step();
  g.render();
}
let shake = false
function draw(){
  frameRate(30)
  if(shake){
  translate(random(-3,3),random(-3,3))
  if(frameCount%15==0){
    g = new Grid(windowWidth,windowHeight,30);
    g.init();
  }
  }
  g.step();
  g.render();
  // console.log(frameRate())
}
function keyPressed(){
  if(shake){
    shake = false
  }else{
    shake = true  
  }
}
