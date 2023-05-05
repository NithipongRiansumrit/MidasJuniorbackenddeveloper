//360-|30H-5.5M| กรณีเข็มยาวอยู่เลข 12 หรือ 0 นาที
//|30H-5.5M| ที้เหลือใช้สูตรนี้
function getClockAngle(hh_mm) {
    let [hour,min] = hh_mm.split(":")
    hour = parseInt(hour)
    min = parseInt(min)
    if(hour>12){
        hour = hour - 12
    }
    if(min==0){
        result = 360-Math.abs((30*hour)-(5.5*min))
    }else{
        result = Math.abs((30*hour)-(5.5*min))
    }
    // console.log(hour,min)
    // console.log(result)
    return result
    }
console.log(getClockAngle("17:30"))