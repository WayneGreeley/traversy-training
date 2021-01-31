const maxChar = require('./maxChar')

test('function exists', () => {
    expect(maxChar).toBeDefined();
});

test('maxChar i need help', () => {
    expect(maxChar('i need help')).toEqual('e');
});