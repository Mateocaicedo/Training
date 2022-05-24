
const button = document.querySelector("#button")
button.addEventListener('click', getData)

function getData() {
    let lat = document.querySelector("#lat")
    let long = document.querySelector("#long")

    const api_key = "doqo5vlodwpjczG0KLSyabvmOkEDiyqHWkE9qauG"
    if (lat.value ==""|| long.value=="") {
        alert("Insert data on textfields")
    } else {
        const rute = `https://api.nasa.gov/planetary/earth/imagery?lon=${long.value}&lat=${lat.value}&date=2022-05-24&api_key=${api_key}`    
        fetch(rute)
        .then(response => response.json())
        .then(result =>{
            return console.log(result)
        })
    }
}
