

const buttonP = document.createElement('button');
document.body.appendChild(buttonP);
buttonP.textContent = "Proceed"
buttonP.style.cssText = "margin:10px"

buttonP.addEventListener('click', function(){
    let toe, allergy, question 
    allergy = []
    for (i = 0; i < document.getElementsByName('Toes').length; i++) {
        if (document.getElementsByName('Toes')[i].checked) {
            toe = document.getElementsByName('Toes')[i].value; 
        }
    }
    for (i = 0; i < document.getElementsByName('Allergy').length; i++) {
        if (document.getElementsByName('Allergy')[i].checked) {
            allergy.push(document.getElementsByName('Allergy')[i].value); 
        }
    }

   question = document.getElementById('Question').value
   

    alert(document.getElementById('FirstName').value + " " + document.getElementById('LastName').value +  " " + 
    document.getElementById('Age').value + " "   +  " " + toe + " " + 
    allergy + " " + question);
        
}) 
