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