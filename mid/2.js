
function highestDigit(n) {
    /*nStr = n.toString();
    if (nStr.length == 1) {
        return n;
    }
    else {
        let max = parseInt(nStr.charAt(0));
        for (let i = 1; i < nStr.length; i++) {
            if (parseInt(nStr.charAt(i)) > max) {
                max = parseInt(nStr.charAt(i));
            }
        }
        return max;
    }*/
    let max = n % 10;
    n = Math.floor(n / 10);
    while (n > 0) {
        if (n % 10 > max) {
            max = n%10;
        }
        n= Math.floor(n/10);
    }
    return max;
}

console.log(highestDigit(379));
console.log(highestDigit(2));
console.log(highestDigit(377401));