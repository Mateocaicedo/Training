//Require function show
const show = require('./show')
module.exports = {
    showDescription(idComplete,ev,listTasks,footer1,footer2,title,timeComplete,descriptionTask,tbody2,tbody,completed,date2){
        idComplete = parseInt(ev.parentElement.getAttribute("id"));  
        
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {
                footer1.classList.add("d-none")
                footer2.classList.remove("d-none")
                title.innerHTML=i.title
                if ( completed.classList.contains("fw-lighter")) {
                    timeComplete.innerHTML= "Must be completed on "+i.limit
                    
                }else{
                    timeComplete.innerHTML= "Was completed on "+date2
                }
                
                descriptionTask.innerHTML=i.description
                show.ShowIncompleted(listTasks,tbody)
                show.ShowComplete(listTasks,tbody2)
            }
        }
    }
}