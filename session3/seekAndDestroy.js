//remove from the array whatever is in the following arguments. Return the leftover values in an array

function seekAndDestroy(arr, ...rest) {
    return arr.filter(val => !rest.includes(val));
}

module.exports = seekAndDestroy;