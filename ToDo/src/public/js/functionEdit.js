//Require function show
const show = require('./show')

module.exports = {
    editFunction(forms2,listTasks,idComplete,edittaskContent,contentIncomplete,completed,incomplete,footer,tbody){
        let title = forms2['title-edit']
        let limit = forms2['limit-edit']
        let description = forms2['description-edit']
        for (let index = 0; index < listTasks.length; index++) {
            if (listTasks[index].idTask == idComplete){
                const element = listTasks[index];
                element.limit = limit.value
                element.title = title.value
                element.description = description.value
                
            }
        }
        
        edittaskContent.classList.add("d-none")
        contentIncomplete.classList.remove("d-none")
        show.ShowIncompleted(listTasks,tbody)
        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
        footer.classList.remove("d-none")
        forms2.reset()
        
        return listTasks
    }
}