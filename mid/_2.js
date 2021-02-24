function highestDigit(n){
    let max = n%10;
    n = parseInt(n/10);
    while(n>0){
        if(n%10 > max){
            max = n%10;
        }
        n = parseInt(n/10);
    }
    return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));