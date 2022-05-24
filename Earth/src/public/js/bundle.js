(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){

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

},{}]},{},[1]);
