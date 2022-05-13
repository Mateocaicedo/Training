//Pongo la hora en la topBAr
let date = document.getElementById('date')
date.innerHTML = new Date().toDateString()

let completed = document.getElementById('completed')
let incomplete = document.getElementById('incomplete')
let content_completed = document.getElementById("completed-tasks")
let content_incomplete = document.getElementById("incomplete-tasks")
let btn_add = document.getElementById("add-task")
let footer = document.getElementById("footer-description")
let new_task_content = document.getElementById("new-task")
let edit_task_content = document.getElementById("edit-task")
let text_top_bar =document.getElementById("text-top-bar")
let footer_1 = document.getElementById("footer")
let footer_2 = document.getElementById("footer-2")
let title = document.getElementById("title-task")
let time_complete = document.getElementById("time-complete")
let description_task = document.getElementById("description-task")

//array de tareas
let list_tasks =[]
function countTasks(active) {
    let count_active = 0
    let count_inactive = 0
  for (const i of list_tasks) {
      if (i.active == 0) {
        count_active++
      } else {
        count_inactive++
      }
  }

  if (active==1) {
      return text_top_bar.innerHTML= count_inactive+" Completed Tasks"
      
  }else if (active==0) {
    return text_top_bar.innerHTML= count_active+" Incomplete Tasks"
     
  }
    
}
completed.addEventListener('click',(e)=>{
    e.preventDefault()
    
    if(completed.classList.contains("fw-lighter") || !completed.classList.contains("fw-lighter")){
        completed.classList.remove("fw-lighter")
        incomplete.classList.add("fw-lighter")
        content_completed.classList.remove("d-none")
        content_incomplete.classList.add("d-none")
        footer.classList.remove("d-none")
        new_task_content.classList.add("d-none")
        edit_task_content.classList.add("d-none")
        countTasks(1)
        Show_complete(list_tasks)
    }
   
})


incomplete.addEventListener('click',(e)=>{
    e.preventDefault()
    if(incomplete.classList.contains("fw-lighter") || !incomplete.classList.contains("fw-lighter")){
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
        content_incomplete.classList.remove("d-none")
        content_completed.classList.add("d-none")
        footer.classList.remove("d-none")
        new_task_content.classList.add("d-none")
        edit_task_content.classList.add("d-none")
        countTasks(0)
        Show_incompleted(list_tasks)
    }
   
})
btn_add.addEventListener('click',(e)=>{
    e.preventDefault()
    footer.classList.add("d-none")
    content_incomplete.classList.add("d-none")
    new_task_content.classList.remove("d-none")
    completed.classList.remove("fw-lighter")
    incomplete.classList.remove("fw-lighter")
    completed.style.pointerEvents ="none";
    incomplete.style.pointerEvents ="none";
    countTasks(0)
})

//Agregar tareas y cancelar
let forms = document.getElementById('form')
let btn_add_task = document.getElementsByClassName("btn-add")[0]
let btn_cancel_task = document.getElementsByClassName("btn-cancel")[0]
btn_add_task.addEventListener('click',(e)=>{
    if (!forms.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        forms.classList.add('was-validated')
      }else{
        forms.classList.remove('was-validated')
        let title = forms['title']
        let limit = forms['limit']
        let description = forms['description']
        let object_data = new Data(title.value,limit.value,description.value)
        list_tasks.push(object_data)
        new_task_content.classList.add("d-none")
        content_incomplete.classList.remove("d-none")
        
        Show_incompleted(list_tasks)

        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
       
        footer.classList.remove("d-none")
        
        countTasks(0)
        forms.reset()
      }
    
},true)



btn_cancel_task.addEventListener('click',(e)=>{
    e.preventDefault();
    Cancel();
},true)





//Mostrar las tareas de incompletas
let tbody = document.getElementById("items")
let id_Complete=0
let date_2 = ""
tbody.addEventListener('click',(e)=>{
    let ev = e.target
  
    if (ev.classList.contains("btn-delete")) {
        id_Complete=ev.parentElement.parentElement.getAttribute("id")
        console.log(id_Complete);
    }else if (ev.classList.contains("btn-edit")) {
            e.preventDefault()
            
            id_Complete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
            for (const i of list_tasks) {
                if (parseInt(i.idTask) == id_Complete) {
                    let title_edit = document.getElementById("title-edit")
                    let limit_edit = document.getElementById("limit-edit")
                    let description_edit = document.getElementById("description-edit")
                    title_edit.value = i.title
                    limit_edit.value = i.limit
                    description_edit.value = i.description
                }
            }
            console.log(list_tasks)
            console.log(id_Complete);
            content_incomplete.classList.add("d-none")
            footer.classList.add("d-none")
            edit_task_content.classList.remove("d-none")
        
            completed.classList.remove("fw-lighter")
            incomplete.classList.remove("fw-lighter")
            completed.style.pointerEvents ="none";
            incomplete.style.pointerEvents ="none";
    } else if(ev.classList.contains("active")){
        id_Complete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        for (const i of list_tasks) {
            if (parseInt(i.idTask) == id_Complete) {
                i._active = 1
                
                Show_incompleted(list_tasks)
                Show_complete(list_tasks)

                console.log(list_tasks);

                countTasks(0)
                date_2 = new Date().toDateString()
            }
        }

    } else if(ev.classList.contains("show-description")){
        id_Complete = parseInt(ev.parentElement.getAttribute("id"));  
        
        for (const i of list_tasks) {
            console.log(i.idTask, id_Complete);
            if (parseInt(i.idTask) == id_Complete) {
                footer_1.classList.add("d-none")
                footer_2.classList.remove("d-none")
                title.innerHTML=i.title
                time_complete.innerHTML= "Must be completed on "+i.limit
                description_task.innerHTML=i.description
                
                
                Show_incompleted(list_tasks)
                Show_complete(list_tasks)
                

                console.log(list_tasks);
            }
        }
    }
    
    
},true)

window.addEventListener('click',(e)=>{

    if(!e.target.classList.contains("show-description")){
        footer_1.classList.remove("d-none")
        footer_2.classList.add("d-none")
    }

    

})


function Show_incompleted(list_tasks){
    let tabla = ""
    for (let index = 0; index < list_tasks.length; index++) {
        const element = list_tasks[index];
        if (parseInt(element._active) == 0) { 
            tabla+='<tr id="'+element._idTask +'">'
            tabla+='<td class="py-3 d-flex justify-content-center"><i class="bi bi-check-circle active"></i></td>'
            tabla+='<td class="py-3 text-info bi show-description">'+element._title+'</td>'
            tabla+='<td class="py-3 ">'+ element._limit+'</td>'
            tabla+='<td class="d-flex gap-4 py-3 "><i class="bi bi-pencil btn-edit"></i><i  class="bi bi-trash3 btn-delete "  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>'
            tabla+='</tr>'
        }
    }
    tbody.innerHTML =tabla

}

//Motrar y boorrar completas
let tbody_2 = document.getElementById("items-2")
function Show_complete(list_tasks){
    let tabla = ""
    for (let index = 0; index < list_tasks.length; index++) {
        const element = list_tasks[index];
        if (parseInt(element._active) == 1) { 
            tabla+='<tr id="'+element._idTask +'">'
            tabla+='<td class="py-3 d-flex justify-content-center"><i class="bi bi-x-circle desactive"></i></td>'
            tabla+='<td class="py-3 text-info bi show-description">'+element._title+'</td>'
            tabla+='<td class="py-3 ">'+ element._limit+'</td>'
            tabla+='<td class="d-flex gap-4 py-3 ps-4 "><i  class="bi bi-trash3 btn-delete "  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>'
            tabla+='</tr>'
        }
    }
    tbody_2.innerHTML = tabla
}

tbody_2.addEventListener('click',(e)=>{
    let ev = e.target
    if (ev.classList.contains("btn-delete")) {
        id_Complete=ev.parentElement.parentElement.getAttribute("id")
        console.log(id_Complete);
    }else if(ev.classList.contains("desactive")){
        id_Complete = parseInt(ev.parentElement.parentElement.getAttribute("id"));  
        for (const i of list_tasks) {
            if (parseInt(i.idTask) == id_Complete) {
                i._active = 0
                Show_incompleted(list_tasks)
                Show_complete(list_tasks)
                countTasks(1)
            }
        }
    }else if(ev.classList.contains("show-description")){
        id_Complete = parseInt(ev.parentElement.getAttribute("id"));  
        for (const i of list_tasks) {
            if (parseInt(i.idTask) == id_Complete) {
                footer_1.classList.add("d-none")
                footer_2.classList.remove("d-none")
                title.innerHTML=i.title
                time_complete.innerHTML= "Was completed on "+date_2
                description_task.innerHTML=i.description
                
        
                Show_incompleted(list_tasks)
                Show_complete(list_tasks)
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

    new_task_content.classList.add("d-none")
    content_incomplete.classList.remove("d-none")
    forms.reset()
    forms_2.reset()
    edit_task_content.classList.add("d-none")
}



//Editar tareas y cancelar 

let forms_2 = document.getElementById('form-2')
let btn_cancel_edit = document.getElementsByClassName("btn-cancel-edit")[0]
let btn_edit_edit = document.getElementsByClassName("btn-edit-edit")[0]

btn_cancel_edit.addEventListener('click',(e)=>{
    e.preventDefault();
    Cancel();
},true)

btn_edit_edit.addEventListener('click',(e)=>{
    if (!forms_2.checkValidity()) {
        e.preventDefault()
        e.stopPropagation()
        forms_2.classList.add('was-validated')
      }else{
        forms_2.classList.remove('was-validated')
        let title = forms_2['title-edit']
        let limit = forms_2['limit-edit']
        let description = forms_2['description-edit']
        for (let index = 0; index < list_tasks.length; index++) {
            if (list_tasks[index].idTask == id_Complete){
                const element = list_tasks[index];
                element.limit = limit.value
                element.title = title.value
                element.description = description.value
                console.log(element);
            }
        }
        edit_task_content.classList.add("d-none")
        content_incomplete.classList.remove("d-none")
        
        Show_incompleted(list_tasks)

        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
       
        footer.classList.remove("d-none")
        forms_2.reset()
    }
},true)


let btn_delete_ =document.getElementById("btn-delete-task")
btn_delete_.addEventListener('click',(e)=>{
    e.preventDefault()

    console.log(list_tasks);
    for (let index = 0; index < list_tasks.length; index++) {
        if (list_tasks[index].idTask == id_Complete){
            console.log("aqui estoy");
            list_tasks.splice(index,1);

        
        }
        
    }
    console.log(list_tasks);
    Show_incompleted(list_tasks)
    Show_complete(list_tasks)
    if ( !completed.classList.contains("fw-lighter")) {
        countTasks(1)
    }else{
        countTasks(0)
    }
    
},true)


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