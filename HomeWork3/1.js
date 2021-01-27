let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true];
let value3 = ['Mars',9,'Apple'];

compare(value1,value2);
compare(value2,value3);
compare(value1,value3);

function compare(A,B){
    for(let i = 0;i<A.length;i++){
        console.log(typeof(A[i]) == typeof(B[i]));
    }
}