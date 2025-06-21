const fibonacci = function(member) {
    member = Number(member);
    if (member < 0) {
        return "OOPS";
    }
    if (member === 0) {
        return 0;
    }
    let num1 = 1;
    let num2 = 1;
    let sum = 0;

    for (let i = 1; i < member; i++) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
    return num1
}

console.log(fibonacci("8"));

// Do not edit below this line
module.exports = fibonacci;
