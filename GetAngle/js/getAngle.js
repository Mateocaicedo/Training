module.exports ={
    GetAngle(hours, minutes){
        return  (30 * hours- 5.5 * minutes) % 360
    }
}
