const repeatString = function(string, num) {
    let result = "";
    if (num < 0) {
        result = "ERROR";
    }
    for (let i = 0; i < num; i++) {
        result = result + string;
    }
    return result;
};

let number = Math.floor(Math.random() * 1000);

console.log(repeatString("", 10));


// Do not edit below this line
module.exports = repeatString;
