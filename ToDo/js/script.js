let date = document.getElementById('date')
date.innerHTML = new Date().toDateString()
let completed = document.getElementById('completed')
let incomplete = document.getElementById('incomplete')
let content_completed = document.getElementById("completed-tasks")

let content_incomplete = document.getElementById("incomplete-tasks")

console.log(content_completed);
completed.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(!completed.classList.contains("fw-lighter")){
        completed.classList.add("fw-lighter")
        incomplete.classList.remove("fw-lighter")
        content_completed.classList.remove("d-none")
        content_incomplete.classList.add("d-none")
    }
   
})
incomplete.addEventListener('click',(e)=>{
    e.preventDefault()
    if(!incomplete.classList.contains("fw-lighter")){
        incomplete.classList.add("fw-lighter")
        completed.classList.remove("fw-lighter")

        content_incomplete.classList.remove("d-none")
        content_completed.classList.add("d-none")
        
    }
   
})