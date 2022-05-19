var square = document.createElement('div');
square.className = "squared";
document.body.appendChild(square);
square.style.width = "350px"
square.style.height =  "350px"
square.style.backgroundColor = "white";
square.style.border = "solid black 2px"

window.addEventListener('load', function(){
    square.style.backgroundColor = 'black'
})

square.addEventListener('mouseover', function(){
    square.style.backgroundColor = 'green'
})

square.addEventListener('mousedown', function(){
    square.style.backgroundColor = 'yellow'
})

square.addEventListener('mouseup', function(){
    square.style.backgroundColor = 'blue'
})

square.addEventListener('dblclick', function(){
    square.style.backgroundColor = 'red'
})

window.addEventListener('wheel', function(){
    square.style.backgroundColor = 'purple'
})

window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 82) {
      square.style.backgroundColor = 'red';
    }
  });
  
  
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 66) {
      square.style.backgroundColor = 'blue';
    }
  });
  
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 71) {
      square.style.backgroundColor = 'green';
    }
  });
  
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 89) {
      square.style.backgroundColor = 'yellow';
    }
  });
  
  
window.addEventListener("keydown", event => {
    if (event.isComposing || event.keyCode === 80) {
      square.style.backgroundColor = 'purple';
    }
  });
  