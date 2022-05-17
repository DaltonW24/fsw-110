const Header = document.createElement('h1');
Header.textContent = "Welcome to my JS site"
document.body.appendChild(Header);

const Para = document.createElement('p');
Para.textContent = "All of this was created with Javascript"
document.body.appendChild(Para);

var newList = document.createElement('ol');
document.body.appendChild(newList)
newList.setAttribute("id", "list1")

const ListItem1 = document.createElement('li')
ListItem1.textContent = "Item1"
document.getElementById('list1').appendChild(ListItem1)

const ListItem2 = document.createElement('li')
ListItem2.textContent = "Item2"
document.getElementById('list1').appendChild(ListItem2)

const ListItem3 = document.createElement('li')
ListItem3.textContent = "Item3"
document.getElementById('list1').appendChild(ListItem3)




