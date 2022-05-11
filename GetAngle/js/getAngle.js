module.exports ={
    GetAngle(hours, minutes){
        if (hours == 12) {
            return  ((30 * hours- 5.5 * minutes) % 360)-360
        }else{
            return  (30 * hours- 5.5 * minutes) % 360
        }
    }
}
