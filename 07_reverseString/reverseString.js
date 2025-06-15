const reverseString = function(string) {
    let reverse = "";
    
    for (let i = 0; i < string.length; i++) {
        reverse += string.slice(string.length - (i + 1), string.length - i);
    }
    // console.log(string.length);
    return reverse;
};

console.log(reverseString(""));

// Do not edit below this line
module.exports = reverseString;
