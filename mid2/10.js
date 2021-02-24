function isValidIP(str){
    let arrstr = str.split(".");
    if(arrstr.length != 4){
        return false;
    }
    for(let i = 0;i<arrstr.length;i++){
        if(arrstr[i].length > 1 && arrstr[i].charAt(0) == "0"){
            return false;
        }
        if(parseInt(arrstr[i]) > 255 || parseInt(arrstr[i]) < 0){
            return false;
        }
    }
    if(parseInt(arrstr[arrstr.length-1]) == 0){
        return false;
    }
    return true;
}

console.log(isValidIP("1.2.3.4"));
console.log(isValidIP("1.2.3"));
console.log(isValidIP("1.2.3.4.5"));
console.log(isValidIP("123.45.67.89"));
console.log(isValidIP("123.456.78.90"));
console.log(isValidIP("123.045.067.089"));
