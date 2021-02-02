//change every letter of the string to the one that follows it and capitalize the vowels

// Change every letter of the string to the one that follows it and capitalize the vowels
// Z should turn to A

function letterSwap(str) {
    const vowels = ['a','e','i','o','u'];
    let resultStr = '';

    resultStr = str.split('')
        .map(x => x.toLowerCase() === 'z' ? 'a' : 
            x === ' ' ? ' ' : String.fromCharCode(x.toLowerCase().charCodeAt() + 1))
        .map(x => vowels.includes(x) ? x.toUpperCase() : x)
        .join('')

    return resultStr;
}

module.exports = letterSwap;