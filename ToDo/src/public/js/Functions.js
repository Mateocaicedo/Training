const Tasks = require('./Tasks')
const object = new Tasks("mateo", "Caicedo", "Niebles")
object.active = 1
module.exports = {
    object,
    addTask(title, limit, description,listTasks){
        let objectData = new Tasks(title,limit,description)
        listTasks.push(objectData)
        return listTasks
    },
    Delete(listTasks,idComplete){
        for (let index = 0; index < listTasks.length; index++) {
            if (listTasks[index].idTask == idComplete){
                listTasks.splice(index,1);
            }
        }
        return listTasks
    },
    editFunction(listTasks,idComplete,title, limit, description,){
        let resultado = false
        for (let index = 0; index < listTasks.length; index++) {
          
            if (listTasks[index].idTask == idComplete){
                const element = listTasks[index];
                element.limit = limit
                element.title = title
                element.description = description
                resultado = true
            }else{
                resultado = false
            }
        }
        return resultado
    },
    Check(idComplete,listTasks){
        let resultado = false
        for (const i of listTasks) {
            if (parseInt(i.idTask) == idComplete) {         
                    if(i._active == 0){
                        i._active = 1
                        resultado = true    
                    }  else{
                        i._active = 0
                        resultado= true
                    }

            }
        }
        return resultado
        
    },
    countTasks(listTasks){
        let countActive = 0
        let countInactive = 0
      for (const i of listTasks) {
          if (i.active == 0) {
            countActive++
          } else {
            countInactive++
          }
      }
      return countActive +""+countInactive
    }

}