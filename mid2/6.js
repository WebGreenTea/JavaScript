function removeDups(arr){
    return arr.filter((item,index) => {
        //console.log(item,index,arr.indexOf(item),arr.indexOf(item) === index);
        return arr.indexOf(item) === index;
    });
}

console.log(removeDups([1,0,1,0]));
console.log(removeDups(["The","big","cat"]));
console.log(removeDups(["John","Taylor","John"]));