let furniture = ['Table','Chairs','Couch'];

print(furniture);

function print(X){
    for(let i = 0;i<X.length;i++){
        for (let char of X[i]){
            console.log(char);
        }
        console.log("-------------");
    }
}