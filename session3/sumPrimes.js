function sumPrimes(num) {
    let total = 0;

    function checkIfPrime(i) {
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                return false;
            }
        }
        return true;
    }

    for (let i = 2; i <= num; i++) {
        if (checkIfPrime(i)) {
            total += i;
        }
    }

    return total;
}

module.exports = sumPrimes;