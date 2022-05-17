//require function countTasks
const activeFunction = require('./countTasks')
//Require function show
const show = require('./show')

module.exports = class Tasks {
    static id = 0
    constructor(title,limit,description){
        this._title = title
        this._limit = limit
        this._description = description
        this._idTask = ++Tasks.id
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
            let objectData = new Tasks(title.value,limit.value,description.value)
            listTasks.push(objectData)
            newtaskContent.classList.add("d-none")
            contentIncomplete.classList.remove("d-none")
            
            this.ShowIncompleted(listTasks,tbody)
    
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
    editFunction(forms2,listTasks,idComplete,edittaskContent,contentIncomplete,completed,incomplete,footer,tbody){
        let title = forms2['title-edit']
        let limit = forms2['limit-edit']
        let description = forms2['description-edit']
        for (let index = 0; index < listTasks.length; index++) {
            console.log("hola");
            if (listTasks[index].idTask == idComplete){
                const element = listTasks[index];
                element.limit = limit.value
                element.title = title.value
                element.description = description.value
                
            }
        }
        
        edittaskContent.classList.add("d-none")
        contentIncomplete.classList.remove("d-none")
        this.ShowIncompleted(listTasks,tbody)
        completed.style.pointerEvents ="auto";
        incomplete.style.pointerEvents ="auto";
        incomplete.classList.remove("fw-lighter")
        completed.classList.add("fw-lighter")
        footer.classList.remove("d-none")
        forms2.reset()
        
        return listTasks
    }
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
     }


   
    toString(){
        return this._idTask +" "+this._title +" "+this._limit+ " "+this._description +" "+this._active
    }
}
