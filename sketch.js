function setup() { 
    createCanvas(400, 400);
    console.log("loaded")
  } 
  
  function draw() { 
    background('yellow');
    let size=100
    const circles=100
    const separation=3
    ellipse(100,100,size,size)
    for(let i=0;i<circles;i+=separation){
      if(i%2==0){
        fill('pink')
      }
      else{
        fill('lightblue')
      }
      ellipse(100+i,100+i,size-i,size-i)
    }
    ellipse(300,300,50,50)
    for(let i=0;i<circles;i+=separation){
      if(i%2==0){
        fill('pink')
      }else{
        fill('lightblue')
      }
      ellipse(300-i,300-i,size-i,size-i)
    }
    for(let i=0;i<circles;i+=separation){
      if(i%2==0){
        fill('pink')
      }else{
        fill('lightblue')
      }
      ellipse(300-i,100+i,size-i,size-i)
    }
    for(let i=0;i<circles;i+=separation){
      if(i%2==0){
        fill('pink')
      }else{
        fill('lightblue')
      }
      ellipse(100+i,300-i,size-i,size-i)
    }
    fill('pink')
    ellipse(200,200,20,20)
    fill('lightblue')
    ellipse(200,200,10,10)
  }
