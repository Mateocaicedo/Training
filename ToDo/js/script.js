//Pongo la hora en la topBAr
let date = document.getElementById('date')
date.innerHTML = new Date().toDateString()

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
function countTasks(active) {
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
        countTasks(1)
        ShowComplete(listTasks)
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
        countTasks(0)
        ShowIncompleted(listTasks)
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
    countTasks(0)
})

//Add tasks and cancel
let forms = document.getElementById('form')
let btnaddTask = document.getElementsByClassName("btn-add")[0]
let btncancelTask = document.getElementsByClassName("btn-cancel")[0]
btnaddTask.addEventListener('click',(e)=>{
    if (!forms.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        forms.classList.add('was-validated')
      }else{
        forms.classList.remove('was-validated')
        let title = forms['title']
        let limit = forms['limit']
        let description = forms['description']
        let objectData = new Data(title.value,limit.value,description.value)
        listTasks.push(objectData)
        newtaskContent.classList.add("d-none")
        contentIncomplete.classList.remove("d-none")
        
        ShowIncompleted(listTasks)

        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
       
        footer.classList.remove("d-none")
        
        countTasks(0)
        forms.reset()
      }
    
},true)



btncancelTask.addEventListener('click',(e)=>{
    e.preventDefault();
    Cancel();
},true)





//show the incomplete tasks
let tbody = document.getElementById("items")
let idComplete=0
let date2 = ""
tbody.addEventListener('click',(e)=>{
    let ev = e.target
  
    if (ev.classList.contains("btn-delete")) {
        idComplete=ev.parentElement.parentElement.getAttribute("id")
        console.log(idComplete);
    }else if (ev.classList.contains("btn-edit")) {
            e.preventDefault()
            
            idComplete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
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
            console.log(listTasks)
            console.log(idComplete);
            contentIncomplete.classList.add("d-none")
            footer.classList.add("d-none")
            edittaskContent.classList.remove("d-none")
        
            completed.classList.remove("fw-lighter")
            incomplete.classList.remove("fw-lighter")
            completed.style.pointerEvents ="none";
            incomplete.style.pointerEvents ="none";
    } else if(ev.classList.contains("active")){
        idComplete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {
                i._active = 1
                
                ShowIncompleted(listTasks)
                ShowComplete(listTasks)

                console.log(listTasks);

                countTasks(0)
                date2 = new Date().toDateString()
            }
        }

    } else if(ev.classList.contains("show-description")){
        idComplete = parseInt(ev.parentElement.getAttribute("id"));  
        
        for (const i of listTasks) {
            console.log(i.idTask, idComplete);
            if (parseInt(i.idTask) == idComplete) {
                footer1.classList.add("d-none")
                footer2.classList.remove("d-none")
                title.innerHTML=i.title
                timeComplete.innerHTML= "Must be completed on "+i.limit
                descriptionTask.innerHTML=i.description
                
                
                ShowIncompleted(listTasks)
                ShowComplete(listTasks)
                

                console.log(listTasks);
            }
        }
    }
    
    
},true)

window.addEventListener('click',(e)=>{

    if(!e.target.classList.contains("show-description")){
        footer1.classList.remove("d-none")
        footer2.classList.add("d-none")
    }

    

})


function ShowIncompleted(listTasks){
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

}

//show and delete completed tasks
let tbody2 = document.getElementById("items-2")
function ShowComplete(listTasks){
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

tbody2.addEventListener('click',(e)=>{
    let ev = e.target
    if (ev.classList.contains("btn-delete")) {
        idComplete=ev.parentElement.parentElement.getAttribute("id")
        console.log(idComplete);
    }else if(ev.classList.contains("desactive")){
        idComplete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {
                i._active = 0
                ShowIncompleted(listTasks)
                ShowComplete(listTasks)
                countTasks(1)
            }
        }
    }else if(ev.classList.contains("show-description")){
        idComplete = parseInt(ev.parentElement.getAttribute("id"));  
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {
                footer1.classList.add("d-none")
                footer2.classList.remove("d-none")
                title.innerHTML=i.title
                timeComplete.innerHTML= "Was completed on "+date2
                descriptionTask.innerHTML=i.description
                
        
                ShowIncompleted(listTasks)
                ShowComplete(listTasks)
            }
        }
    }
},true)


function Cancel() {
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



//edit tasks and cancel

let forms2 = document.getElementById('form-2')
let btncancelEedit = document.getElementsByClassName("btn-cancel-edit")[0]
let btneditEdit = document.getElementsByClassName("btn-edit-edit")[0]

btncancelEedit.addEventListener('click',(e)=>{
    e.preventDefault();
    Cancel();
},true)

btneditEdit.addEventListener('click',(e)=>{
    if (!forms2.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        forms2.classList.add('was-validated')
      }else{
        forms2.classList.remove('was-validated')
        let title = forms2['title-edit']
        let limit = forms2['limit-edit']
        let description = forms2['description-edit']
        for (let index = 0; index < listTasks.length; index++) {
            if (listTasks[index].idTask == idComplete){
                const element = listTasks[index];
                element.limit = limit.value
                element.title = title.value
                element.description = description.value
                console.log(element);
            }
        }
        edittaskContent.classList.add("d-none")
        contentIncomplete.classList.remove("d-none")
        
        ShowIncompleted(listTasks)

        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
       
        footer.classList.remove("d-none")
        forms2.reset()
    }
},true)


let btnDelete =document.getElementById("btn-delete-task")
btnDelete.addEventListener('click',(e)=>{
    e.preventDefault()

    console.log(listTasks);
    for (let index = 0; index < listTasks.length; index++) {
        if (listTasks[index].idTask == idComplete){
            console.log("aqui estoy");
            listTasks.splice(index,1);

        
        }
        
    }
    console.log(listTasks);
    ShowIncompleted(listTasks)
    ShowComplete(listTasks)
    if ( !completed.classList.contains("fw-lighter")) {
        countTasks(1)
    }else{
        countTasks(0)
    }
    
},true)

//class data
class Data {
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