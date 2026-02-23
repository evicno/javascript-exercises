const fibonacci = function(num) {
    if (typeof(num) == "string") {
        num = Number(num);
    }
    if (!typeof(num) == "number" || !Number.isInteger(num) || num < 0) {
        return "OOPS";
    }
    let fibo = ["1", "1"];
    if (num == 0) {
        return 0;
    }
    else {
        for (let i = 2; i <= num; i++) {
            let sum = Number(fibo[i - 1]) + Number(fibo[i - 2]);
            fibo.push(sum);
        }
    return Number(fibo[num - 1]);
    }
}

// Do not edit below this line
module.exports = fibonacci;
