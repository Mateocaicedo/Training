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