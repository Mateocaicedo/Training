//Require function show
const show = require('./handlers')
//Require function show
const classTasks = require('./Tasks')
const object = new classTasks()
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
                object.ShowIncompleted(listTasks,tbody)
                object.ShowComplete(listTasks,tbody2)
            }
        }
    }
}