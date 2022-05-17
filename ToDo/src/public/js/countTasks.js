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
