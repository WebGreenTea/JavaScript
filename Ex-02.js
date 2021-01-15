function equation(str){
    //return eval(str);//so easy 555

    //For check This is expression?
    for(let i = 0;i<str.length;i++){
        let isnum = parseInt(str.charAt(i));
        if(!isnum && !(isnum === 0) && !((str.charAt(i) == "+") || (str.charAt(i) == "-") || (str.charAt(i) == "*")) ){
            return "ERROR! is not expression";
        }
    }

    //For calculate * first
    for(let i = 0;i<str.length;i++){
        let split = str.split('');
        if(split[i] == "*"){//if found * operator
            //console.log(str);//For test
            let des = i;
            let leftO = '';
            let rightO = '';
            let leftpos;
            let rightpos;
            let mutiresul;
            for(;;){//find left number of *
                if(!parseInt(split[des-1]) && !(parseInt(split[des-1]) === 0) ){
                    leftpos = des;
                    break;
                }
                else{
                    des = des-1;
                    leftO = split[des] + leftO;
                }
            }
            des = i;
            for(;;){//find right number of *
                if(!parseInt(split[des+1]) && !(parseInt(split[des+1]) === 0) ){
                    rightpos = des;
                    break;
                }
                else{
                    des = des+1;
                    rightO = rightO + split[des];
                }
            }
            //calculate * 
            //console.log(`${leftO} * ${rightO}`);//For test
            let leftstr = str.substring(0,leftpos);
            let rightstr = str.substring(rightpos+1,str.length);
            mutiresul = parseInt(leftO) * parseInt(rightO);
            str = leftstr + mutiresul + rightstr;
            i = leftpos;
        }
    }
    //console.log(str);//For test

    //For calculate + and -
    let operator = '';
    let realnum1 = '';
    let realnum2 = '';
    let Length = str.length;
    for(let i = 0;i<Length;i++){
        let charat0 = str.charAt(0);
        let isnum = parseInt(charat0);
        if(isnum || isnum === 0){//is num
            if(operator === '' && realnum2 === ''){//is number left of operator
                realnum1 = realnum1 + charat0;
            }
            else{//is number right of operator
                realnum2 = realnum2 + charat0;
                if(!parseInt(str.charAt(1)) && !(parseInt(str.charAt(1)) === 0)){
                    if(operator == "+"){
                        let sum = parseInt(realnum1) + parseInt(realnum2);
                        realnum1 = sum;
                        operator = '';
                        realnum2 = '';
                    }
                    else if(operator == "-"){
                        let minus = parseInt(realnum1) - parseInt(realnum2);
                        realnum1 = minus;
                        operator = '';
                        realnum2 = '';
                    }
                }
            }
        }
        else{//is operator
                operator = charat0;
        }
        str = str.substring(1);
    }
    return realnum1;

}

console.log(equation("1+1"));
console.log(equation("7*4-2"));
console.log(equation("1+1+1+1+1"));
//For test
//let STR = "50000-20*40*55+6*2";
//console.log(equation(STR));
