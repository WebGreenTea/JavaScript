function totalVolume(){
    let sum = 0;
    //let muti = 1;
    for(let i = 0;i<arguments.length;i++){
        sum+=arguments[i][0]*arguments[i][1]*arguments[i][2];
        /*for(let j = 0;j<arguments[i].length;j++){
            muti*=arguments[i][j];
        }
        sum+=muti;
        muti = 1;*/
    }
    return sum;
}





console.log(totalVolume([4,2,4],[3,3,3],[1,1,2],[2,1,1]));
console.log(totalVolume([2,2,2],[2,1,1]));
console.log(totalVolume([1,1,1]));