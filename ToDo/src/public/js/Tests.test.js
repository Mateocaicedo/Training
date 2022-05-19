const Functions = require('./Functions');
const Tasks = require('./Tasks');
describe("edit, delete and add",()=>{
    test("add new task",()=>{ 
        let listTasks = []
        const resultado = Functions.addTask("mateo", "Caicedo", "Niebles",listTasks)
        expect(resultado).toHaveLength(1)
    
    });
    test("edit task",()=>{
        let listTasks = [Functions.object]
        const resultado = Functions.editFunction(listTasks, 1,"Hacer tarea","23-34-2002","Hacer tarea de matematicas")
        expect(resultado).toBeTruthy();
    });

    test("delete task", ()=>{
        let listTasks = [Functions.object]
        const resultado = Functions.Delete(listTasks, 1)
        expect(resultado).toHaveLength(0)
    });


})

describe("check and count tasks",()=>{
    test("active and inactive",()=>{
        let listTasks = [Functions.object]
        const resultado = Functions.Check(1,listTasks)
        
        expect(resultado).toBeTruthy();
    });
    test("count tasks",()=>{
        const object2 = new Tasks("mateo2", "Caicedo2", "Niebles2")
        object2.active = 1
        let listTasks = [Functions.object,object2]
        const resultado = Functions.countTasks(listTasks)
        expect(parseInt(resultado)).toBe(11)
    })
})
