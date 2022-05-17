//Require class Data
const data = require('./Data')
//require function countTasks
const activeFunction = require('./countTasks')
//Require function show
const show = require('./show')
module.exports = {
    addTask(e,forms,listTasks,completed,incomplete,footer,tbody,texttopBar,newtaskContent,contentIncomplete){
        if (!forms.checkValidity()) {
            e.preventDefault()
            e.stopPropagation()
            forms.classList.add('was-validated')
          }else{
            forms.classList.remove('was-validated')
            let title = forms['title']
            let limit = forms['limit']
            let description = forms['description']
            let objectData = new data(title.value,limit.value,description.value)
            listTasks.push(objectData)
            newtaskContent.classList.add("d-none")
            contentIncomplete.classList.remove("d-none")
            
            show.ShowIncompleted(listTasks,tbody)
    
            completed.style.pointerEvents ="auto";
            incomplete.style.pointerEvents ="auto";
            incomplete.classList.remove("fw-lighter")
            completed.classList.add("fw-lighter")
           
            footer.classList.remove("d-none")
            
            activeFunction.countTasks(0,listTasks,texttopBar)
            forms.reset()
          }
          return listTasks
    }
}