const names = ['Justin', 'Sarah', 'Christopher'];

// while loop
console.log('-- while --');
let index = 0;
while (index < names.length) {
    const name = names[index];
    console.log(name);
    index++;
}

// for loop
console.log('-- for --');
for (let index = 0; index < names.length; index++) {
    const name = names[index];
    console.log(name);
}

// for of
console.log('-- for of --');
for (let name of names) {
    console.log(name);
}

// do while loop **sniplet
console.log('-- do while --');
index2 = 0;
do {
    console.log(names[index2]);
    index2 ++;
} while (index2 < names.length);