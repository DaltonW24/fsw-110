var Header = document.createElement('h1')
Header.textContent = "Header Text"
document.body.appendChild(Header);

for (var i = 0; i < 10 ;  i++){
    Header = document.createElement('h1')
    Header.textContent = "Header Text"
    document.body.appendChild(Header);
}
const nodeList = document.querySelectorAll('h1')

var namesList = ['steve', 'larry', 'joe','shirley', 'steph', 'nate', 'rick', 'emily']
var newList = document.createElement('ul');

for (var i = 0; i < nodeList.length; i++) {
	nodeList[i].style.color= 'red'	
}

for (var i = 0; i < namesList.length; i++) {
	
	var personName = document.createElement('li')
	personName.textContent = namesList[i]
	newList.append(personName);
}
document.body.appendChild(newList);