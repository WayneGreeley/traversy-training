//write out numbers from 1 to some number
//unless number if multiple of 3 output fizz
//and if number is multiple of 5 output buzz

function fizzbuzz (num) {
    const outputArr = [];
    for (let i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            outputArr.push('fizzbuzz');
        } else if (i % 3 === 0) {
            outputArr.push('fizz');
        } else if (i % 5 === 0) {
            outputArr.push('buzz');
        } else {
            outputArr.push(i);
        }
    }
    return outputArr;
}

module.exports = fizzbuzz;