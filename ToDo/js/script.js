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

//array de tareas
let list_tasks =[]
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
        text_top_bar.innerHTML="0 Completed Tasks"
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

        text_top_bar.innerHTML="0 Incomplete Tasks"
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
})


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
        forms.reset()
      }
    
},true)

btn_cancel_task.addEventListener('click',(e)=>{

    completed.style.pointerEvents ="auto";
    incomplete.style.pointerEvents ="auto";
    incomplete.classList.remove("fw-lighter")
    completed.classList.add("fw-lighter")
    footer.classList.remove("d-none")

    new_task_content.classList.add("d-none")
    content_incomplete.classList.remove("d-none")
    forms.reset()
},true)


//Mostrar las tareas de incompletas
let tbody = document.getElementById("items")
tbody.addEventListener('click',(e)=>{
    let ev = e.target
    console.log(ev);
  
    if (ev.classList.contains("btn-delete")) {
        console.log("HOLA");
    }else{
        if (ev.classList.contains("btn-edit")) {
            e.preventDefault()
            console.log("gols");
            content_incomplete.classList.add("d-none")
            footer.classList.add("d-none")
            edit_task_content.classList.remove("d-none")
        
            completed.classList.remove("fw-lighter")
            incomplete.classList.remove("fw-lighter")
        }
    }
    
    
},true)

function Show_incompleted(list_tasks){
    console.log(list_tasks.length);
    let tabla = ""
    for (let index = 0; index < list_tasks.length; index++) {
        const element = list_tasks[index];
        if (element._active == 0) { 
            tabla+='<tr class="tr">'
            tabla+='<td class="py-3 d-flex justify-content-center"><i class="bi bi-check-circle"></i></td>'
            tabla+='<td class="py-3 text-info bi">'+element._title+'</td>'
            tabla+='<td class="py-3 ">'+ element._limit+'</td>'
            tabla+='<td class="d-flex gap-4 py-3 "><i class="bi bi-pencil btn-edit"></i><i  class="bi bi-trash3 btn-delete "  data-bs-toggle="modal" data-bs-target="#exampleModal"></i></td>'
            tabla+='</tr>'
        }
    }
    tbody.innerHTML =tabla
}

Show_incompleted(list_tasks)







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