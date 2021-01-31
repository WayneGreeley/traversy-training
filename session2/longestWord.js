//return the longest word of a sentence
//if more than one word shares the longest length return an array

function longestWord (sentence) {
    let longestLength = 0;
    let outputArr = [];

    sentence.toLowerCase() .match(/\w+/g)
        .forEach(word => {
            if (word.length === longestLength) {
                //word matches current longest
                outputArr.push(word);
            } else if (word.length > longestLength) {
                //its a new longest word
                longestLength = word.length;
                outputArr = [];
                outputArr.push(word);
            }
        })

    return outputArr.length > 1 ? outputArr : outputArr[0];
}

module.exports = longestWord;