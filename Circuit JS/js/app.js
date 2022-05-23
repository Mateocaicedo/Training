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

let lineSwitch2 = document.getElementById("line-switch-2")
let lineSwitch2_1 = document.getElementById("line-switch-2-1")
let lineSwitch2_2 = document.getElementById("line-switch-2-2")
let lineSwitch2_3 = document.getElementById("line-switch-2-3")
let lineSwitch1 = document.getElementById("line-switch-1")
let lineSwitch1_1 = document.getElementById("line-switch-1-1")
let lineSwitch3 = document.getElementById("line-switch-3")
let lineSwitch3_1 = document.getElementById("line-switch-3-1")

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
        breakerON(lineSwitch1,lineSwitch1_1,lineSwitch2,lineSwitch2_1,lineSwitch2_2,
            lineSwitch2_3,lineSwitch3,lineSwitch3_1)
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
        offBreaker(bulb1,lineBulb1)
        offBreaker(bulb2,lineBulb2)
        offBreaker(bulb3,lineBulb3)
        breakerOFF(lineSwitch1,lineSwitch1_1,lineSwitch2,lineSwitch2_1,lineSwitch2_2,
            lineSwitch2_3,lineSwitch3,lineSwitch3_1)
        
        
    } 
})


function switcher(element,bulb, line) {

    if (breaker.classList.contains("on")) {
        
        if (!element.classList.contains("on") ) {
            on(element,bulb,line)
        }else if(element.classList.contains("on")){
            element.classList.remove("on")
            element.src = "./images/switch_off.png" 
            bulb.src = "./images/light_bulb_off.png"
            bulb.style.maxWidth="40px"
            line.style.borderLeftColor="black"
            line.style.borderBottomColor="black"
            countOff(element)
        }
    }else{
         
        if (!element.classList.contains("on") ) {
            element.classList.add("on")
            element.src = "./images/switch_on.png"  
            count(element)      
        }else if(element.classList.contains("on")){
            element.classList.remove("on")
            element.src = "./images/switch_off.png" 
            countOff(element)
            
        }
    }
    
}


function offBreaker(bulb,line) {
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
function  breakerON(lineSwitch1,lineSwitch1_1,lineSwitch2,lineSwitch2_1,lineSwitch2_2,
    lineSwitch2_3,lineSwitch3,lineSwitch3_1) {
        lineSwitch1.style.borderLeftColor="green"
        lineSwitch1_1.style.borderBottomColor="green"
        lineSwitch2.style.borderBottomColor="green"
        lineSwitch2_1.style.borderLeftColor="green"
        lineSwitch2_2.style.borderBottomColor="green"
        lineSwitch2_3.style.borderLeftColor="green"
        lineSwitch3.style.borderLeftColor="green"
        lineSwitch3_1.style.borderBottomColor="green"
}
function  breakerOFF(lineSwitch1,lineSwitch1_1,lineSwitch2,lineSwitch2_1,lineSwitch2_2,
    lineSwitch2_3,lineSwitch3,lineSwitch3_1) {
        lineSwitch1.style.borderLeftColor="black"
        lineSwitch1_1.style.borderBottomColor="black"
        lineSwitch2.style.borderBottomColor="black"
        lineSwitch2_1.style.borderLeftColor="black"
        lineSwitch2_2.style.borderBottomColor="black"
        lineSwitch2_3.style.borderLeftColor="black"
        lineSwitch3.style.borderLeftColor="black"
        lineSwitch3_1.style.borderBottomColor="black"
}