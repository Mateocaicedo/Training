let layout = document.getElementById("layout")
let data = document.getElementById("data")

layout.addEventListener('click',()=>{  data.classList.contains("row")?data.classList.remove("row"):data.classList.add("row");})


let send = document.getElementById("send").addEventListener('click',(e)=>{
    e.preventDefault()
    let min = document.getElementById("minutes")
    let hours = document.getElementById("hours")
    let result = document.getElementById("angle")
    let alert = document.getElementById("alert")
    let text = document.getElementById("text")
    if (min.value=="" || hours.value =="" || parseInt(min.value)>60 || parseInt(hours.value)>12 ) {
        alert.innerHTML ='<div class="alert alert-danger me-3 ms-3 text-center p-1" role="alert">Bad request</div>'
        result.innerHTML='0°'
        text.innerHTML ="Add hours and minutes to get an angle."
    }else{
        alert.innerHTML=''
        let angle =  GetAngle(hours.value, min.value)
        result.innerHTML = angle+'°'
        let v_hours = '<p class="text-success m-0"> '+hours.value+ ' Hours <p/>'
        let v_minutes = '<p class="text-success m-0"> '+min.value+ ' Minutes <p/>'
        text.innerHTML = '<p class="m-0" >At<p/>'+ v_hours+'<p class="m-0" >with<p/> ' +v_minutes+ ' <p class="m-0" >there`s an angle of:<p/> '
        text.classList.add("d-flex")
        text.classList.add("gap-1")
        text.classList.add("justify-content-center")
        
    }

})
function GetAngle(hours, minutes){
    if (hours == 12) {
        return  Math.abs(((30 * hours- 5.5 * minutes) % 360)-360)
    }else{
        return  Math.abs((30 * hours- 5.5 * minutes) % 360)
    }
}

