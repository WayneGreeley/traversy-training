//sum of all parameters entered regardless of the amount of numbers - NO ARRAYS

function addParams (...numbers) {
    return numbers.reduce((acc, cur) => acc + cur, 0);
}

module.exports = addParams;