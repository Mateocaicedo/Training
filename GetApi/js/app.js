const words = require('random-words')

window.addEventListener('load',GetImage)


function GetImage() {
    const word = words()
    const ruta = `https://images-api.nasa.gov/search?q=${word}`
    fetch(ruta)
        .then(response => response.json())
        .then(result => {
            const img = document.querySelector("#img")
            return img.innerHTML = `
              <img src="${result.collection.items[0].links[0].href}" class="img-fluid" alt="...">`
            
        })

        
    
}
