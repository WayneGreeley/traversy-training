//return the character that appears the most often in a string

function maxChar(str) {
    const charMap = {};
    let commonNum = 0;
    let commonChar = '';

    str.split('').forEach(char => {
        if (charMap[char]) {
            charMap[char]++;
        } else {
            charMap[char] = 1;
        }
    });

    for (let char in charMap) {
        if (charMap[char] > commonNum) {
            commonNum = charMap[char];
            commonChar = char;
        }
    }

    return commonChar;
}

module.exports = maxChar;