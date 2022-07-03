document.getElementById('Submit').addEventListener('click', function(e){
    e.preventDefault()
        let unorderedList = document.createElement('ul')
        unorderedList.setAttribute('id', 'unorderedList')
        document.body.appendChild(unorderedList)
    
        let listItem1 = document.createElement('li')
        listItem1.setAttribute('id', 'listItem1')
        listItem1.textContent = document.getElementById('BestPlayerResponse').value
      console.log(document.getElementById('BestPlayerResponse'))
    
        let listItem2 = document.createElement('li')
        listItem2.setAttribute('id', 'listItem2')


        let Delete1 = document.body.createElement('button')
        Delete1.setAttribute('id', 'Delete1')
        Delete1.textContent = "Delete"

        let Delete2 = document.body.createElement('button')
        Delete2.setAttribute('id', 'Delete2')
        Delete2.textContent = "Delete"
        document.body.append(Delete1, Delete2)
    
            var radios = document.getElementsByName('radio');
            
            for (var radio of radios){
                if (radio.checked) {
                    listItem2.textContent = radio.value
                }
            }
        unorderedList.append(listItem1, listItem2);
        
    })
    
    