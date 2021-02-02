const evenOddSums = require('./evenOddSums');

test('function exists', () => {
    expect(evenOddSums).toBeDefined();
});

test('evenOddSums([50, 60, 60, 45, 71]) == [170, 116]', () => {
    expect(evenOddSums([50, 60, 60, 45, 71])).toEqual([170, 116]);
});
