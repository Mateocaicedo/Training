let switch1 = document.getElementById("switch-1")
let bulb1 = document.getElementById("bulb-1")
let switch2 = document.getElementById("switch-2")
let bulb2 = document.getElementById("bulb-off-2")
let switch3 = document.getElementById("switch-3")
let bulb3 = document.getElementById("bulb-off-3")
let lineBulb1 = document.getElementById("line-bulb-1")
let lineBulb2 = document.getElementById("line-bulb-2")
let lineBulb3 = document.getElementById("line-bulb-3")
let breaker = document.getElementById("breaker")

let count1 = 0
let count2 = 0
let count3 = 0
switch1.addEventListener('click',(e)=>{
    e.preventDefault()
    switcher(switch1,bulb1,lineBulb1)
})

switch2.addEventListener('click', (e)=>{
    e.preventDefault()
    switcher(switch2,bulb2,lineBulb2)
})
switch3.addEventListener('click',(e)=>{
    e.preventDefault()
    switcher(switch3,bulb3,lineBulb3)
})

breaker.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!breaker.classList.contains("on")) {
        breaker.classList.add("on")
        breaker.src = "./images/breaker_on.png"
        if (count1==1) {
            on(switch1,bulb1,lineBulb1)
        }if (count2==1) {
            on(switch2,bulb2,lineBulb2)
        }if (count3==1) {
            on(switch3,bulb3,lineBulb3)
        }
        
    }else{
        breaker.classList.remove("on")
        breaker.src = "./images/breaker_off.png" 
        off(switch1,bulb1,lineBulb1)
        off(switch2,bulb2,lineBulb2)
        off(switch3,bulb3,lineBulb3)
        
        
    } 
})


function switcher(element,bulb, line) {

    if (breaker.classList.contains("on")) {
        
        if (!element.classList.contains("on") ) {
            on(element,bulb,line)
        }else if(element.classList.contains("on")){
           off(element,bulb,line)
            countOff(element)
        }
    }else{
        alert("Turn the circuit breaker on, please!")
    }
    
}

function off(element,bulb,line) {
    element.classList.remove("on")
    element.src = "./images/switch_off.png" 
    bulb.src = "./images/light_bulb_off.png"
    bulb.style.maxWidth="40px"
    line.style.borderLeftColor="black"
    line.style.borderBottomColor="black"
   
}

function count(element) {
    if(element.getAttribute("id")== "switch-1"){
        count1=1
    }else if (element.getAttribute("id")== "switch-2") {
        count2=1
    }else if (element.getAttribute("id")== "switch-3") {
        count3=1
    }
}
function countOff(element) {
    if(element.getAttribute("id")== "switch-1"){
        count1=0
    }else if (element.getAttribute("id")== "switch-2") {
        count2=0
    }else if (element.getAttribute("id")== "switch-3") {
        count3=0
    }
}
function on(element,bulb,line) {
    element.classList.add("on")
    element.src = "./images/switch_on.png"
    bulb.src = "./images/light_bulb_on.png"
    bulb.style.maxWidth="60px"
    line.style.borderLeftColor="green"
    line.style.borderBottomColor="green"
    count(element)
}