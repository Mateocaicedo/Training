(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports = class Data {
    static id = 0
    constructor(title,limit,description){
        this._title = title
        this._limit = limit
        this._description = description
        this._idTask = ++Data.id
        this._active = 0
    }

    get title(){
        return this._title
    }
    get idTask(){
        return this._idTask
    }
    get limit(){
        return this._limit
    }
    get description(){
        return this._description
    }
    set title(title){
        this._title = title
    }
    set limit(limit){
        this._limit = limit
    }
    set description(description){
        this._description = description
    }
    set active(active){
        this._active = active
    }
    get active(){
        return this._active
    }

   
    toString(){
        return this._idTask +" "+this._title +" "+this._limit+ " "+this._description +" "+this._active
    }
}

},{}],2:[function(require,module,exports){
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
},{"./Data":1,"./countTasks":5,"./show":10}],3:[function(require,module,exports){
function Cancel(completed,incomplete, footer,newtaskContent,contentIncomplete,forms,forms2,edittaskContent) {
    completed.style.pointerEvents ="auto";
    incomplete.style.pointerEvents ="auto";
    incomplete.classList.remove("fw-lighter")
    completed.classList.add("fw-lighter")
    footer.classList.remove("d-none")

    newtaskContent.classList.add("d-none")
    contentIncomplete.classList.remove("d-none")
    forms.reset()
    forms2.reset()
    edittaskContent.classList.add("d-none")
}

module.exports = Cancel
},{}],4:[function(require,module,exports){
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
},{"./countTasks":5,"./show":10}],5:[function(require,module,exports){
module.exports =  {
    countTasks(active,listTasks,texttopBar){
        let countActive = 0
        let countInactive = 0
      for (const i of listTasks) {
          if (i.active == 0) {
            countActive++
          } else {
            countInactive++
          }
      }
    
      if (active==1) {
          return texttopBar.innerHTML= countInactive+" Completed Tasks"
          
      }else if (active==0) {
        return texttopBar.innerHTML= countActive+" Incomplete Tasks"
         
      }
    }
    
    
}

},{}],6:[function(require,module,exports){
//require function countTasks
const activeFunction = require('./countTasks')

module.exports = {
    Delete(listTasks,completed,texttopBar,idComplete){
        for (let index = 0; index < listTasks.length; index++) {
            if (listTasks[index].idTask == idComplete){
                listTasks.splice(index,1);
            }
        }
        if ( !completed.classList.contains("fw-lighter")) {
            activeFunction.countTasks(1,listTasks,texttopBar)
        }else{
            activeFunction.countTasks(0,listTasks,texttopBar)
        }
        return listTasks
    }
}
},{"./countTasks":5}],7:[function(require,module,exports){
module.exports = {
    edit(idComplete,ev,listTasks,contentIncomplete,footer,edittaskContent,incomplete,completed){
        idComplete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        //set info on edit form
            for (const i of listTasks) {
                if (parseInt(i.idTask) == idComplete) {
                    let titleEdit = document.getElementById("title-edit")
                    let limitEdit = document.getElementById("limit-edit")
                    let descriptionEdit = document.getElementById("description-edit")
                    titleEdit.value = i.title
                    limitEdit.value = i.limit
                    descriptionEdit.value = i.description
                }
            }
            contentIncomplete.classList.add("d-none")
            footer.classList.add("d-none")
            edittaskContent.classList.remove("d-none")
            completed.classList.remove("fw-lighter")
            incomplete.classList.remove("fw-lighter")
            completed.style.pointerEvents ="none";
            incomplete.style.pointerEvents ="none";

        return idComplete
    }

}
},{}],8:[function(require,module,exports){
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
},{"./show":10}],9:[function(require,module,exports){
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


},{"./Data":1,"./addNewTask":2,"./cancel":3,"./checkIncomplete":4,"./countTasks":5,"./delete":6,"./editIncompleteTask":7,"./functionEdit":8,"./show":10,"./showDescription":11}],10:[function(require,module,exports){
module.exports = {
    ShowIncompleted(listTasks,tbody){
        let tabla = ""
        for (let index = 0; index < listTasks.length; index++) {
            const element = listTasks[index];
            if (parseInt(element._active) == 0) { 
                tabla+='<tr id="'+element._idTask +'">'
                tabla+='<td class="py-3 d-flex justify-content-center"><i class="bi bi-check-circle active"></i></td>'
                tabla+='<td class="py-3 text-info bi show-description">'+element._title+'</td>'
                tabla+='<td class="py-3 ">'+ element._limit+'</td>'
                tabla+='<td class="d-flex  py-3 "><i class="bi bi-pencil btn-edit me-3"></i><i  class="bi bi-trash3 btn-delete "  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>'
                tabla+='</tr>'
            }
        }
        tbody.innerHTML =tabla
    },
        ShowComplete(listTasks,tbody2){
        let tabla = ""
        for (let index = 0; index < listTasks.length; index++) {
            const element = listTasks[index];
            if (parseInt(element._active) == 1) { 
                tabla+='<tr id="'+element._idTask +'">'
                tabla+='<td class="py-3 d-flex justify-content-center"><i class="bi bi-x-circle desactive"></i></td>'
                tabla+='<td class="py-3 text-info bi show-description">'+element._title+'</td>'
                tabla+='<td class="py-3 ">'+ element._limit+'</td>'
                tabla+='<td class="d-flex gap-4 py-3 ps-4 "><i  class="bi bi-trash3 btn-delete "  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>'
                tabla+='</tr>'
            }
        }
        tbody2.innerHTML = tabla
    }
}
},{}],11:[function(require,module,exports){
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
},{"./show":10}]},{},[9]);
