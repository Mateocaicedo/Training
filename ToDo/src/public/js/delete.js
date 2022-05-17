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