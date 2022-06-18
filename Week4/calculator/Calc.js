


document.getElementById('addButton').addEventListener('click', event =>{
    let answerAdd =  document.getElementById('divAdd1').value + document.getElementById('divAdd2').value;
        document.getElementById('divAnswerAdd').value = answerAdd;
})

document.getElementById('subtractButton').addEventListener('click', event =>{
    let answersub = document.getElementById('SubBox1').value - document.getElementById('SubBox2').value;
        document.getElementById('divAnswerSub').value = answersub;
})
 
document.getElementById('multiplyButton').addEventListener('click', event =>{
    let answerMult = document.getElementById('multBox1').value * document.getElementById('multBox2').value;
        document.getElementById('divAnswerMul').value = answerMult;
})

document.getElementById('divideButton').addEventListener('click', event =>{
    let answerDivide = document.getElementById('divideBox1').value / document.getElementById('divideBox2').value;
        document.getElementById('divAnswerDivide').value = answerDivide;
})

divAdd.style.cssText = 'margin: 10px'
divAdd1.style.cssText = 'background-color: yellow'
divAdd2.style.cssText = 'background-color: yellow'


divSub.style.cssText = 'margin: 10px'
SubBox1.style.cssText = 'background-color: aqua'
SubBox2.style.cssText = "background-color: aqua"


divMult.style.cssText = 'margin: 10px'
multBox1.style.cssText = 'background-color: lime'
multBox2.style.cssText = 'background-color: lime'


divDivide.style.cssText = "margin: 10px"
divideBox1.style.cssText = 'background-color: cornflowerblue'
divideBox2.style.cssText = 'background-color: cornflowerblue'