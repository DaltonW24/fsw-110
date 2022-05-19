// No css styling required
// Must link a JS file to HTML file
// Site must have:
// a navbar with links (doesn’t need to work)
// An h1 tag
// A p tag
// A list
// Footer

const Nav = document.createElement('nav')
document.body.appendChild(Nav);
Nav.setAttribute('id', 'Nav');

const Nav1 = document.createElement('a');
Nav1.textContent = 'Home' 
document.getElementById('Nav').appendChild(Nav1);
Nav1.setAttribute('href', '#');

const Nav2 = document.createElement('a');
Nav2.textContent = 'Contact'
document.getElementById('Nav').appendChild(Nav2);
Nav2.setAttribute('href', '#');

const Nav3 = document.createElement('a');
Nav3.textContent = 'Services'
document.getElementById('Nav').appendChild(Nav3);
Nav3.setAttribute('href', '#');

const Header = document.createElement('h1');
Header.textContent = "This is my Header";
document.body.appendChild(Header);

const Para = document.createElement('p');
Para.textContent = "This is my P Tag";
document.body.appendChild(Para);

var newList = document.createElement('ol');
document.body.appendChild(newList)
newList.setAttribute("id", "list1")

const ListItem1 = document.createElement('li')
ListItem1.textContent = "Content1"
document.getElementById('list1').appendChild(ListItem1)

const ListItem2 = document.createElement('li')
ListItem2.textContent = "Content2"
document.getElementById('list1').appendChild(ListItem2)

const ListItem3 = document.createElement('li')
ListItem3.textContent = "Content3"
document.getElementById('list1').appendChild(ListItem3)

const Footer = document.createElement('footer')
Footer.textContent = "Footer"
document.body.appendChild(Footer)
