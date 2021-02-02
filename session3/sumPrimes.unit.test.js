const sumPrimes = require('./sumPrimes');

test('function exists', () => {
    expect(sumPrimes).toBeDefined();
});

test('sumPrimes(10) == 17', () => {
    expect(sumPrimes(10)).toEqual(17);
});
