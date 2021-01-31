const reverseString = require('./reverseString')

//return if a string is the same forward as it is backwards

function isPalindrome(str) {
    reversedStr = reverseString(str);
    return str === reversedStr;
}

module.exports = isPalindrome;