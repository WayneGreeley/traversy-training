const reverseString = require('./reverseString')

test('function exists', () => {
    expect(reverseString).toBeDefined();
});

test('reverses hello', () => {
    expect(reverseString('hello')).toEqual('olleh');
});