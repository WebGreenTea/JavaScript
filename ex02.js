function equation(str){
    let splitstr = str.split('');
    let leftnum;
    let operator = '';
    leftnum = splitstr[0];
    for(let i = 1;i < str.length;i++){
        if(splitstr[i] == "+"){
            operator = '+';
        }
        else if (splitstr[i] == "-"){
            operator = '-';
        }
        else if (splitstr[i] == "*"){
            operator = '*';
        }
        else{
            if(operator == "+"){
                leftnum = parseInt(leftnum) + parseInt(splitstr[i]);
            }
            else if (operator == "-"){
                leftnum = parseInt(leftnum) - parseInt(splitstr[i]);
            }
            else if (operator == "*"){
                leftnum = parseInt(leftnum) * parseInt(splitstr[i]);
            }
        }
    }
    return leftnum;
}
console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));