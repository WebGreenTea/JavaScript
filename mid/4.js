function totalVolume(){
    let sum = 0;
    for(let i = 0;i<arguments.length;i++){
        sum+=(arguments[i][0]*arguments[i][1]*arguments[i][2]);
    }
    return sum;
}

console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));