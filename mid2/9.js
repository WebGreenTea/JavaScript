function digitalClock(num){
    let sec;
    let min;
    let hour;
    sec = num%60;
    num = Math.floor(num/60);
    min = num%60;
    num = Math.floor(num/60);
    if(num>=24){
        hour = num%24;
    }
    else{
        hour = num;
    }

    if(hour<10){
        hour = "0"+hour;
    }
    if(min<10){
        min = "0"+min;
    }
    if(sec<10){
        sec = "0"+sec ;
    }
    
    return hour+":"+min+":"+sec;
}

console.log(digitalClock(5025));
console.log(digitalClock(61201));
console.log(digitalClock(87000));