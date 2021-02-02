//find the missing letter in the passed letter range and return it. If all letters are present, return undefined

function missingLetters(str) {
    let compare = str.charCodeAt(0);
    let missing;

    str.split('').map((char, i) => {
        if (str.charCodeAt(i) == compare) {
            ++compare;
        } else {
            missing = String.fromCharCode(compare);
        }
    });

    return missing;
}

module.exports = missingLetters;