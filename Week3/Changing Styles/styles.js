for (var i = 0; i < 5 ; i++){
    const Header = document.createElement('h2')
    Header.textContent = "This is the Header"
    Header.setAttribute('class', 'Headers')
    Header.style.cssText = "Font-size: 20px; Font-weight: lighter; Font-family: sans-serif; Color: cornflowerblue;"
    document.body.appendChild(Header)
    Header.classList.add('border')
}
