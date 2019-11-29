function setup() { 
    createCanvas(400, 400);
  } 
  function draw() { 
    background('hotpink');
    const X=[]
    const Y=[]
    for(let i=0;i<600;i++){
      if(Math.sin(i)<0){
        fill('lightseagreen')
      }
      else{
        fill('teal')
      }
      ellipse(i,Math.sin(i)*250+200,20,20)
    }
    
  }