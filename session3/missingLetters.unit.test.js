const missingLetters = require('./missingLetters');

test('function exists', () => {
    expect(missingLetters).toBeDefined();
});

test('missingLetters("abce") == "d"', () => {
    expect(missingLetters('abce')).toEqual('d');
});

test('missingLetters("abcdefghjklmno") == "i"', () => {
    expect(missingLetters('abcdefghjklmno')).toEqual('i');
});

test('missingLetters("abcdefghijklmnopqrstuvwxyz") == "undefined"', () => {
    expect(missingLetters('abcdefghijklmnopqrstuvwxyz')).toEqual(undefined);
});

test('missingLetters("abc") == "undefined"', () => {
    expect(missingLetters('abc')).toEqual(undefined);
});
