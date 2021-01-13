let STR = "2+57-1+5";

function equation(str){
    
    for(let i = 0;i<str.length;i++){
        let split = str.split('');
        
    }










    let operator = '';
    let realnum1 = '';
    let realnum2 = '';
    let Length = str.length;
    for(let i = 0;i<Length;i++){
        let charat0 = str.charAt(0);
        let isnum = parseInt(charat0)
        if(!isnum && i === 0){ //first char in string not number
            return "ERROR! is not expression";
        }
        
        if(isnum){//is num
            if(operator === '' && realnum2 === ''){
                realnum1 = realnum1 + charat0;
            }
            else{
                realnum2 = realnum2 + charat0;
                if(!parseInt(str.charAt(1))){
                    //////
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
                    //////
                }
            }
        }
        else{//not num
            if((charat0 == "+") || (charat0 == "-")){
                operator = charat0;
            }
            else{
                return "ERROR! is not expression(2)";
            }
        }
        str = str.substring(1);
       
    }
    return realnum1;

}

console.log(equation(STR));
//console.log(STR.length);
