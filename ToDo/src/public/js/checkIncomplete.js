//require function countTasks
const activeFunction = require('./countTasks')
//Require function show
const show = require('./show')

module.exports = {
    Check(ev, idComplete,listTasks,tbody,tbody2,texttopBar,completed){
        idComplete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {
                
                if ( completed.classList.contains("fw-lighter")) {
                    i._active = 1
                    activeFunction.countTasks(0,listTasks,texttopBar)
                }else{
                    i._active = 0
                    activeFunction.countTasks(1,listTasks,texttopBar)

                }
                show.ShowIncompleted(listTasks,tbody)
                show.ShowComplete(listTasks,tbody2)

                console.log(listTasks);
                
            }
        }
        
    }
}