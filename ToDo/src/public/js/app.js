//Require class Data
const classTasks = require('./Tasks')
//require const activeFunction = require('./countTasks')

//Require function cancel
const cancel = require('./cancel')
//Require functionCheck incomplete
const checkIncomplete = require('./checkIncomplete')
//require function showDescription
const showDescription = require('./showDescription')

//Require handlres
const handlers= require('./handlers')

//Date on the topbar
let date = document.getElementById('date')
date.innerHTML = new Date().toDateString()



handlers.showFormAdd()
handlers.clearCompleted()
handlers.clearIncomplete()

handlers.addTask()
handlers.edit()
//btn delete on modal
handlers.delete()
handlers.GetTable1()
handlers.GetTable2()

//button cancel on addtask
handlers.btncancelTask.addEventListener('click',(e)=>{
    e.preventDefault();
    cancel(handlers.completed,handlers.incomplete,handlers.footer,handlers.newtaskContent,
        handlers.contentIncomplete,handlers.forms,handlers.forms2,handlers.edittaskContent)
},true)

//show the incomplete tasks

let date2 = ""
handlers.tbody.addEventListener('click',(e)=>{
    let ev = e.target
    if(ev.classList.contains("active")){
        date2 = new Date().toDateString()
        checkIncomplete.Check(ev,handlers.idComplete,handlers.listTasks,handlers.tbody,handlers.tbody2,handlers.texttopBar,handlers.completed)
        
//show description in the footer
    } else if(ev.classList.contains("show-description")){
        showDescription.showDescription(handlers.idComplete,ev,handlers.listTasks,handlers.footer1,handlers.footer2,handlers.title,handlers.timeComplete
            ,handlers.descriptionTask,handlers.tbody2,handlers.tbody,handlers.completed,date2)
    }
    
    
},true)
//click in anywhere on the screen
window.addEventListener('click',(e)=>{
    if(!e.target.classList.contains("show-description")){
        handlers.footer1.classList.remove("d-none")
        handlers.footer2.classList.add("d-none")
    }
})




//show and delete completed tasks
handlers.tbody2.addEventListener('click',(e)=>{
    let ev = e.target
    if(ev.classList.contains("desactive")){
        checkIncomplete.Check(ev,handlers.idComplete,handlers.listTasks,handlers.tbody,handlers.tbody2,handlers.texttopBar,handlers.completed)

    //show description in the footer
    }else if(ev.classList.contains("show-description")){
        showDescription.showDescription(handlers.idComplete,ev,handlers.listTasks,handlers.footer1,handlers.footer2,handlers.title,
            handlers.timeComplete,handlers.descriptionTask,handlers.tbody2,handlers.tbody,handlers.completed,date2)
    }
},true)




//btn cancel in edit content
handlers.btncancelEdit.addEventListener('click',(e)=>{
    e.preventDefault();
    cancel(handlers.completed,handlers.incomplete,handlers.footer,handlers.newtaskContent,
        handlers.contentIncomplete,handlers.forms,handlers.forms2,handlers.edittaskContent)
},true)
//btn edit 



