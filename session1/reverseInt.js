const reverseString = require('./reverseString')

//reverse an int

function reverseInt(num) {
    return parseInt(reverseString(num.toString())) * Math.sign(num);
}

module.exports = reverseInt;