let value1 = ['Apple',1,false];
let value2 = ['Fries',2,true];
let value3 = ['Mars',9,'Apple'];

function typeCompare(valueX, valueY){
    for(let i = 0;i<valueX.length;i++){
        console.log((typeof valueX[i]) == (typeof valueY[i]));
    }
}

console.log("Compare Type of value1 and value2");
typeCompare(value1,value2);
console.log("Compare Type of value2 and value3");
typeCompare(value2,value3);
console.log("Compare Type of value1 and value3");
typeCompare(value1,value3);

