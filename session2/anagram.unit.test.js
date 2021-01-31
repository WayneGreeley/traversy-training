const isAnagram = require('./anagram')

test('function exists', () => {
    expect(isAnagram).toBeDefined();
});

test('function is function', () => {
    expect(typeof isAnagram).toEqual('function');
});

test('isAnagrm true elbow below', () => {
    expect(isAnagram('elbow','below')).toBeTruthy();
});

test('isAnagrm true Domitory dirt room', () => {
    expect(isAnagram('Dormitory','dirty room##')).toBeTruthy();
});

test('isAnagrm false hello aloha', () => {
    expect(isAnagram('hello','aloha')).toBeFalsy();
});

// ex. 'elbow' === 'below'
// ex. 'Dormitory' === 'dirty room##'