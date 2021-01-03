let count=0;
const clickSound = new Audio("clickSound.wav");
const button = document.querySelector('.button-container');
const message = document.querySelector('.message');
button.addEventListener('mousedown',()=>{
    clickSound.play();
    count+=1;

});
