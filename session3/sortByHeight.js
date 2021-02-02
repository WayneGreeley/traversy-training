// Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-descending order without moving the trees.

function sortByHeight(arr) {
    const heightsPulledOut = arr.filter(x => x > 0);
    const heightsSorted = heightsPulledOut.sort();
    //replaces previous numbers with first of sorted numbers
    return arr.map(y => y < 0 ? y : heightsSorted.shift());
}

module.exports = sortByHeight;