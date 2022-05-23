let switch1 = document.getElementById("switch-1")
let bulb1 = document.getElementById("bulb-1")
let switch2 = document.getElementById("switch-2")
let bulb2 = document.getElementById("bulb-off-2")
let switch3 = document.getElementById("switch-3")
let bulb3 = document.getElementById("bulb-off-3")
let lineBulb1 = document.getElementById("line-bulb-1")
let lineBulb2 = document.getElementById("line-bulb-2")
let lineBulb3 = document.getElementById("line-bulb-3")
switch1.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!switch1.classList.contains("on")) {
        switch1.classList.add("on")
        switch1.src = "./images/switch_on.png"
        bulb1.src = "./images/light_bulb_on.png"
        bulb1.style.maxWidth="60px"
        lineBulb1.style.borderBottomColor="green"
    }else if(switch1.classList.contains("on")){
        switch1.classList.remove("on")
        switch1.src = "./images/switch_off.png" 
        bulb1.src = "./images/light_bulb_off.png"
        bulb1.style.maxWidth="40px"
        lineBulb1.style.borderBottomColor="black"
    }
    
})
switch2.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!switch2.classList.contains("on")) {
        switch2.classList.add("on")
        switch2.src = "./images/switch_on.png"
        bulb2.src = "./images/light_bulb_on.png"
        bulb2.style.maxWidth="60px"
        lineBulb2.style.borderBottomColor="green"
    }else if(switch2.classList.contains("on")){
        switch2.classList.remove("on")
        switch2.src = "./images/switch_off.png" 
        bulb2.src = "./images/light_bulb_off.png"
        bulb2.style.maxWidth="40px"
        lineBulb2.style.borderBottomColor="black"
    }
    
})
switch3.addEventListener('click',(e)=>{
    e.preventDefault()
    if (!switch3.classList.contains("on")) {
        switch3.classList.add("on")
        switch3.src = "./images/switch_on.png"
        bulb3.src = "./images/light_bulb_on.png"
        bulb3.style.maxWidth="60px"
        lineBulb3.style.borderLeftColor="green"
    }else if(switch3.classList.contains("on")){
        switch3.classList.remove("on")
        switch3.src = "./images/switch_off.png" 
        bulb3.src = "./images/light_bulb_off.png"
        bulb3.style.maxWidth="40px"
        lineBulb3.style.borderLeftColor="black"
    }
    
})