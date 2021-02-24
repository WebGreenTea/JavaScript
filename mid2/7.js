function sumTwoSmallestNums(arr){
    let min1;
    let min2;
    let havemin1 = false;
    let havemin2 = false;
    for(let i of arr){
        if(i >= 0){
            if(!havemin1){
                min1 = i;
                havemin1 = true;
            }
            else{
                if(i < min1){
                    min1 = i;
                }
            }
        }
    }
    for(let i of arr){
        if(i >= 0 && i!=min1){
            if(!havemin2){
                min2 = i;
                havemin2 = true;
            }
            else{
                if(i<min2){
                    min2 = i;
                }
            }
        }
    }
    return min1+min2;
}

console.log(sumTwoSmallestNums([19,5,42,2,77]));
console.log(sumTwoSmallestNums([10,343445353,3453445,3453545353453]));
console.log(sumTwoSmallestNums([2,9,6,-1]));
console.log(sumTwoSmallestNums([879,953,694,-874,342,221,-91,-723,791,-587]));
console.log(sumTwoSmallestNums([3683,2902,3951,-475,1617,-2385]));