const sumAll = function(x, y) {
    let max = 0;
    let min = 0;
    let sum = 0;
    
    // Error Handling Section (returns "ERROR")
    if (x < 0 || y < 0) {
        return "ERROR";
    }
    // console.log(Number.isInteger(x));
    if(!Number.isInteger(x) || !Number.isInteger(y)) {
        return "ERROR";
    }

    if(Number.isNaN(x) || Number.isNaN(y)) {
        return "ERROR nan";
    }

    // Determining which argument is max and which is min
    if(x > y) {
        max = x;
        min = y;
    } else {
        max = y;
        min = x;
    }

    // Starting the summation with adding the min number and max number of the range to the sum
    sum += min + max;

    // Adds each integer value between the min and max to the sum
    while(min < max - 1) {
        ++min;
        sum += min;
    }

    return sum;
};

console.log(sumAll(10, [90, 1]));

// Do not edit below this line
module.exports = sumAll;
