function setup() { 
    createCanvas(400, 400);
    console.log("loaded")
  } 
  
  function draw() { 
  const mappedX=map(mouseX,0,400,0,255)
  const mappedY=map(mouseY,0,400,0,255)
  background(mappedX,mappedY,mappedX-mappedY+100)
    let size=100
    const circles=100
    const separation=3
    ellipse(100,100,size,size)
    for(let i=0;i<circles;i+=separation){
      if(i%2==0 && i<=20){
        fill('pink')
      }
      else if(i%2!=0 && i<=20){
        fill('lightblue')
      }
      else if(i%2==0 && i>20){
        fill('peachpuff')
      }
      else{
        fill('peru')
      }
      ellipse(100+i,100+i,size-i,size-i)
    }
    ellipse(300,300,50,50)
    for(let i=0;i<circles;i+=separation){
      /*if(i%2==0){
        fill('pink')
      }else{
        fill('lightblue')
      }*/
      if(i%2==0 && i<=20){
        fill('pink')
      }
      else if(i%2!=0 && i<=20){
        fill('lightblue')
      }
      else if(i%2==0 && i>20){
        fill('peachpuff')
      }
      else{
        fill('peru')
      }
      ellipse(300-i,300-i,size-i,size-i)
    }
    for(let i=0;i<circles;i+=separation){
      if(i%2==0 && i<=20){
        fill('pink')
      }
      else if(i%2!=0 && i<=20){
        fill('lightblue')
      }
      else if(i%2==0 && i>20){
        fill('peachpuff')
      }
      else{
        fill('peru')
      }
      ellipse(300-i,100+i,size-i,size-i)
    }
    for(let i=0;i<circles;i+=separation){
      if(i%2==0 && i<=20){
        fill('pink')
      }
      else if(i%2!=0 && i<=20){
        fill('lightblue')
      }
      else if(i%2==0 && i>20){
        fill('peachpuff')
      }
      else{
        fill('peru')
      }
      ellipse(100+i,300-i,size-i,size-i)
    }
  }
