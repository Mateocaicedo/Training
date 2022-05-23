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


function switcher(element,bulb, line) {
    if (!element.classList.contains("on")) {
        element.classList.add("on")
        element.src = "./images/switch_on.png"
        bulb.src = "./images/light_bulb_on.png"
        bulb.style.maxWidth="60px"
        line.style.borderLeftColor="green"
        line.style.borderBottomColor="green"
    }else if(element.classList.contains("on")){
        element.classList.remove("on")
        element.src = "./images/switch_off.png" 
        bulb.src = "./images/light_bulb_off.png"
        bulb.style.maxWidth="40px"
        line.style.borderLeftColor="black"
        line.style.borderBottomColor="black"
    }
}