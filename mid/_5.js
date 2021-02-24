function getBudgets(){
    /*let sum = 0;
    for(let i = 0;i<arrobj.length;i++){
        sum+=arrobj[i].budget;
    }
    return sum;*/
    //console.log(arguments);
    let sum = "";
    for(let i = 0;i<arguments.length;i++){
        for(let j = 0;j<arguments[i].length;j++){
            if(j == 0){
                sum+=arguments[i][j].name+" "+arguments[i][j].age+" "+arguments[i][j].budget;
            }
            else{
                sum+="| "+arguments[i][j].name+" "+arguments[i][j].age+" "+arguments[i][j].budget;
            }   
        }
        sum+="|";
    }
    return sum;
}
console.log(getBudgets([
    {name: "John",age:21,budget: 23000},
    {name: "Steve",age:32,budget: 40000},
    {name: "Martin",age:16,budget: 2700}
],[
    {name: "Johny",age:21,budget: 29000},
    {name: "Stevent",age:32,budget: 32000},
    {name: "Martini",age:16,budget: 1600}
]));
