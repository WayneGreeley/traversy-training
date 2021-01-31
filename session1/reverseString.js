//reverse a string

function reverseString(str) {
    return str
        .split('')
        .reverse()
        .join('');
}

module.exports = reverseString;