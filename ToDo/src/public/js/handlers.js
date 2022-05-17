//require function countTasks
const activeFunction = require('./countTasks')

//Require class Data
const classTasks = require('./Tasks')
//Require function editCompleteTask
const editCompleteTask = require('./editIncompleteTask')
//instance object type Tasks
const object = new classTasks()

//define object HTML

let btnDelete =document.getElementById("btn-delete-task")
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
let tbody2 = document.getElementById("items-2")
let tbody = document.getElementById("items")

//add task and cancel element
let forms = document.getElementById('form')
let btnaddTask = document.getElementsByClassName("btn-add")[0]
let btncancelTask = document.getElementsByClassName("btn-cancel")[0]

//array of Tasks
let listTasks =[]
//idRowS
let idComplete=0
//edit tasks and cancel element
let forms2 = document.getElementById('form-2')
let btncancelEdit = document.getElementsByClassName("btn-cancel-edit")[0]
let btneditEdit = document.getElementsByClassName("btn-edit-edit")[0]
module.exports = {
    btnDelete,completed,incomplete,contentCompleted,contentIncomplete,btnAdd,footer,newtaskContent,edittaskContent,texttopBar,footer1,footer2,
    title,timeComplete,descriptionTask,tbody,tbody2,forms,btnaddTask,btncancelTask,forms2,btncancelEdit, idComplete,listTasks,
    GetTable1(){
        tbody.addEventListener('click',(e)=>{
            let ev = e.target
        //button delete incomplete task
            if (ev.classList.contains("btn-delete")) {
                idComplete=ev.parentElement.parentElement.getAttribute("id")
         //buttn edit incomplete task       
            }else if (ev.classList.contains("btn-edit")) {
                e.preventDefault()
                idComplete= editCompleteTask.edit(idComplete,ev,listTasks,contentIncomplete,footer,edittaskContent,
                incomplete,completed)
    //btn check incomplete task
        }},true)
    },
    GetTable2(){
        tbody2.addEventListener('click',(e)=>{
            let ev = e.target
        //button delete incomplete task
            if (ev.classList.contains("btn-delete")) {
                idComplete=ev.parentElement.parentElement.getAttribute("id")
         //buttn edit incomplete task       
            }},true)
    },

    edit(){
        btneditEdit.addEventListener('click',(e)=>{
            if (!forms2.checkValidity()) {
                e.preventDefault()
                e.stopPropagation()
                forms2.classList.add('was-validated')
            }else{
                listTasks =object.editFunction(forms2,listTasks,idComplete,edittaskContent,contentIncomplete,completed,incomplete,footer,tbody)
                console.log(listTasks)
            }
            
        },true)
        
    },
    addTask(){
        btnaddTask.addEventListener('click',(e)=>{
            listTasks= object.addTask(e,forms,listTasks,completed,incomplete,footer,tbody,
                texttopBar,newtaskContent,contentIncomplete)
            console.log(listTasks);
        },true)
    },
   delete(){
        btnDelete.addEventListener('click',(e)=>{
        e.preventDefault()
        listTasks = object.Delete(listTasks,completed,texttopBar,idComplete)
        object.ShowIncompleted(listTasks,tbody)
        object.ShowComplete(listTasks,tbody2)
        },true)
   },
   clearCompleted(){
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
                object.ShowComplete(listTasks,tbody2)
            }
        
        })
   },
   showFormAdd(){
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
   },
   clearIncomplete(){
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
            object.ShowIncompleted(listTasks,tbody)
        }
       
    })
   }
}
