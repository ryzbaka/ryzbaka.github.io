let backCanvas;
let frontCanvas;
class Star{
    constructor(){
      this.x=random(-displayWidth,displayWidth);
      this.y=random(-displayHeight,displayHeight);
      this.z=random(displayWidth);
    }
    show(){
      fill('black');
      noStroke();
      
      const sx=map(this.x/this.z,0,1,0,displayWidth)
      const sy=map(this.y/this.z,0,1,0,displayHeight)
      const r=map(this.z,0,width,16,0)
      ellipse(sx,sy,r,r)
    }
    update(){
      this.z-=20
      if(this.z<1){
        this.z=displayWidth
        this.x=random(-displayWidth,displayWidth);
        this.y=random(-displayHeight,displayHeight);
      }
    }
    
  }
  const nStars=1000
  const stars=[]
  function setup(){
    backCanvas=createCanvas(displayWidth,displayHeight)
    backCanvas.position(0,0)
    backCanvas.style('z-index','-2')
    backCanvas.background('red')
    for(let i=0;i<nStars;i++){
      const someStar=new Star()
      stars.push(someStar)
    }
  }
  function windowResized(){
      backCanvas.height=displayHeight;
      backCanvas.width=displayWidth;
  }
  function draw(){
    background('red')
    translate(displayWidth/2,displayHeight/2)
    for(let i=0;i<nStars;i++){
      stars[i].update()
      stars[i].show()
    }
  }
  
