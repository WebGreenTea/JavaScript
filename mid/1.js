
console.log(numberSplit(4));
console.log(numberSplit(10));
console.log(numberSplit(11));
console.log(numberSplit(-9));

function numberSplit(num){
    return [Math.floor(num/2),Math.ceil(num/2)]
}