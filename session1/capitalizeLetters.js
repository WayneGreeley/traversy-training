//return a string with the first letter of each word capitolized

function capitalizeLetters(sentence) {
    return sentence
        .split(' ')
        .map(word => word[0].toUpperCase() + word.substr(1))
        .join(' ');
}

module.exports = capitalizeLetters;