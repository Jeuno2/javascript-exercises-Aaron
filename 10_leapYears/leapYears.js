const leapYears = function(year) {
    // test conditions
    if (year % 100 === 0 && year % 400 !== 0) {
        return false;
    }
    else if (year % 4 !== 0) {
        return false;
    }
    else {
        return true;
    }
};

console.log(leapYears(700));

// Do not edit below this line
module.exports = leapYears;
