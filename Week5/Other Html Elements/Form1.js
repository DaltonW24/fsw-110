

const buttonP = document.createElement('button');
document.body.appendChild(buttonP);
buttonP.textContent = "Proceed"
buttonP.style.cssText = "margin:10px"

buttonP.onclick = function(){
    alert(document.getElementById('FirstName').value + " " + document.getElementById('LastName').value +  " " + document.getElementById('Age').value + " "   +  " " + document.getElementById('Toes') + " " + document.getElementsByName('allergies').value);
}
