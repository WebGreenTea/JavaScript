let furniture = ['Table','Chairs','Couch'];

LettersEach(furniture);

function LettersEach(Arr){
    for(let i = 0;i<Arr.length;i++){
       //console.log("Letter in String of Array["+i+"]");
        for (let Letter of Arr[i]){
            console.log(Letter);
        }
        console.log();
    }
}