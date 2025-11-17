const reverseString = function(str) {
    let arrReverse = str.split("");
    let strReverse = ""
    for (let i = 0; i < str.length; i++) {
        strReverse += arrReverse.pop();
    }
    return strReverse;
};

// Do not edit below this line
module.exports = reverseString;
