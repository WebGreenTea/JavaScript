console.log(simplePair([1,2,3],3));
console.log(simplePair([1,2,3],6));
console.log(simplePair([1,2,3],9));

function simplePair(arr,res){
    for(let left = 0;left<arr.length;left++){
        for(let right = 0;right<arr.length;right++){
            if(left != right){
                if(arr[left]*arr[right] == res){
                    return [arr[left],arr[right]];
                }
            }
        }
    }
    return null;
}