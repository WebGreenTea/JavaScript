
function capToFront(str) {
    let low = "";
    let up = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == str.charAt(i).toUpperCase()) {
            up += str.charAt(i);
        }
        else {
            low += str.charAt(i);
        }
    }
    //console.log(str);
    return up + low;
}

console.log(capToFront("hApPy"));
console.log(capToFront("moveMENT"));
console.log(capToFront("shOrtCAKE"));
