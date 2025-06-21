const palindromes = function (word) {

    let reverse = "";

    let cleanedString = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    
    console.log(cleanedString);

    for (let i = 0; i < cleanedString.length; i++) {
        reverse += cleanedString.slice(cleanedString.length - (i + 1), cleanedString.length - i);
    }

    if (cleanedString === reverse) {
        return true;
    }
    else {
        return false;
    }

    console.log(reverse);
};

console.log(palindromes("Racecar!"));

// Do not edit below this line
module.exports = palindromes;
