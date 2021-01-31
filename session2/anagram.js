//return true if two passed in words are anagrams
//words that can form each other if the letters are switched around; nothing added or removed
// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'

//showRegex('dirty room##');

function isAnagram(str1,str2) {
    return cleanString(str1) === cleanString(str2);
};

function cleanString(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

function showRegex(str) {
    console.log(str.replace(/[^\w]/g, ''));
}

module.exports = isAnagram;