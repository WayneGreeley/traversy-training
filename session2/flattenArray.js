//flatten an array of arrays into one array

function flattenArray(arrs) {
    return [].concat(...arrs);
}

module.exports = flattenArray;