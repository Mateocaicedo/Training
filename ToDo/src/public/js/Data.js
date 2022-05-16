export class Data {
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
