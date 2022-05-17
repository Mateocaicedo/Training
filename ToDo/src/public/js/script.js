//Require class Data
const data = require('./Data')
//require function countTasks
const activeFunction = require('./countTasks')
//Require function show
const show = require('./show')
//Require function cancel
const cancel = require('./cancel')
//Require function addNewTask
const addNewTaskFunction = require('./addNewTask')
//Require function editCompleteTask
const editCompleteTask = require('./editIncompleteTask')
//Require functionCheck incomplete
const checkIncomplete = require('./checkIncomplete')
//require function showDescription
const showDescription = require('./showDescription')
//Require funtion edit
const functionEdit =require('./functionEdit')
//Require function delete
const Delete =  require('./delete')
//Date on the topbar
let date = document.getElementById('date')
date.innerHTML = new Date().toDateString()

//define object HTML
let completed = document.getElementById('completed')
let incomplete = document.getElementById('incomplete')
let contentCompleted = document.getElementById("completed-tasks")
let contentIncomplete = document.getElementById("incomplete-tasks")
let btnAdd = document.getElementById("add-task")
let footer = document.getElementById("footer-description")
let newtaskContent = document.getElementById("new-task")
let edittaskContent= document.getElementById("edit-task")
let texttopBar =document.getElementById("text-top-bar")
let footer1 = document.getElementById("footer")
let footer2 = document.getElementById("footer-2")
let title = document.getElementById("title-task")
let timeComplete = document.getElementById("time-complete")
let descriptionTask = document.getElementById("description-task")

//array of Tasks
let listTasks =[]


completed.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(completed.classList.contains("fw-lighter") || !completed.classList.contains("fw-lighter")){
        completed.classList.remove("fw-lighter")
        incomplete.classList.add("fw-lighter")
        contentCompleted.classList.remove("d-none")
        contentIncomplete.classList.add("d-none")
        footer.classList.remove("d-none")
        newtaskContent.classList.add("d-none")
        edittaskContent.classList.add("d-none")
        activeFunction.countTasks(1,listTasks,texttopBar)
        show.ShowComplete(listTasks,tbody2)
    }
   
})


incomplete.addEventListener('click',(e)=>{
    e.preventDefault()
    if(incomplete.classList.contains("fw-lighter") || !incomplete.classList.contains("fw-lighter")){
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
        contentIncomplete.classList.remove("d-none")
        contentCompleted.classList.add("d-none")
        footer.classList.remove("d-none")
        newtaskContent.classList.add("d-none")
        edittaskContent.classList.add("d-none")
        activeFunction.countTasks(0,listTasks,texttopBar)
        show.ShowIncompleted(listTasks,tbody)
    }
   
})
btnAdd.addEventListener('click',(e)=>{
    e.preventDefault()
    footer.classList.add("d-none")
    contentIncomplete.classList.add("d-none")
    newtaskContent.classList.remove("d-none")
    completed.classList.remove("fw-lighter")
    incomplete.classList.remove("fw-lighter")
    completed.style.pointerEvents ="none";
    incomplete.style.pointerEvents ="none";
    activeFunction.countTasks(0,listTasks,texttopBar)
})

//Add tasks and cancel
let forms = document.getElementById('form')
let btnaddTask = document.getElementsByClassName("btn-add")[0]
let btncancelTask = document.getElementsByClassName("btn-cancel")[0]
//button add task
btnaddTask.addEventListener('click',(e)=>{
    listTasks= addNewTaskFunction.addTask(e,forms,listTasks,completed,incomplete,footer,tbody,texttopBar,newtaskContent,contentIncomplete)
    console.log(listTasks);
},true)
//button cancel in addtask
btncancelTask.addEventListener('click',(e)=>{
    e.preventDefault();
    cancel(completed,incomplete,footer,newtaskContent,contentIncomplete,forms,forms2,edittaskContent)
},true)

//show the incomplete tasks
let tbody = document.getElementById("items")
let idComplete=0
let date2 = ""
tbody.addEventListener('click',(e)=>{
    let ev = e.target
//button delete incomplete task
    if (ev.classList.contains("btn-delete")) {
        idComplete=ev.parentElement.parentElement.getAttribute("id")
 //buttn edit incomplete task       
    }else if (ev.classList.contains("btn-edit")) {
            e.preventDefault()
           idComplete= editCompleteTask.edit(idComplete,ev,listTasks,contentIncomplete,footer,edittaskContent,incomplete,completed)
//btn check incomplete task
    } else if(ev.classList.contains("active")){
        date2 = new Date().toDateString()
        checkIncomplete.Check(ev,idComplete,listTasks,tbody,tbody2,texttopBar,completed)
        
//show description in the footer
    } else if(ev.classList.contains("show-description")){
        showDescription.showDescription(idComplete,ev,listTasks,footer1,footer2,title,timeComplete,descriptionTask,tbody2,tbody,completed,date2)
    }
    
    
},true)
//click in anywhere on the screen
window.addEventListener('click',(e)=>{
    if(!e.target.classList.contains("show-description")){
        footer1.classList.remove("d-none")
        footer2.classList.add("d-none")
    }
})




//show and delete completed tasks
let tbody2 = document.getElementById("items-2")
tbody2.addEventListener('click',(e)=>{
    let ev = e.target
    //button delete of completed task
    if (ev.classList.contains("btn-delete")) {
        idComplete=ev.parentElement.parentElement.getAttribute("id")
       
    //button x on completed task
    }else if(ev.classList.contains("desactive")){
        checkIncomplete.Check(ev,idComplete,listTasks,tbody,tbody2,texttopBar,completed)

    //show description in the footer
    }else if(ev.classList.contains("show-description")){
        showDescription.showDescription(idComplete,ev,listTasks,footer1,footer2,title,timeComplete,descriptionTask,tbody2,tbody,completed,date2)
    }
},true)




//edit tasks and cancel
let forms2 = document.getElementById('form-2')
let btncancelEedit = document.getElementsByClassName("btn-cancel-edit")[0]
let btneditEdit = document.getElementsByClassName("btn-edit-edit")[0]
//btn cancel in edit content
btncancelEedit.addEventListener('click',(e)=>{
    e.preventDefault();
    cancel(completed,incomplete,footer,newtaskContent,contentIncomplete,forms,forms2,edittaskContent);
},true)
//btn edit 
btneditEdit.addEventListener('click',(e)=>{
    if (!forms2.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        forms2.classList.add('was-validated')
    }else{
        listTasks =functionEdit.editFunction(forms2,listTasks,idComplete,edittaskContent,contentIncomplete,completed,incomplete,footer,tbody)
    }
},true)

//btn delete in modal
let btnDelete =document.getElementById("btn-delete-task")
btnDelete.addEventListener('click',(e)=>{
    e.preventDefault()
    listTasks = Delete.Delete(listTasks,completed,texttopBar,idComplete)
    show.ShowIncompleted(listTasks,tbody)
    show.ShowComplete(listTasks,tbody2)
},true)

