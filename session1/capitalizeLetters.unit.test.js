const capitalizeLetters = require('./capitalizeLetters')

test('function exists', () => {
    expect(capitalizeLetters).toBeDefined();
});

test('capitolizeLetters i need help', () => {
    expect(capitalizeLetters('i need help')).toEqual('I Need Help');
});