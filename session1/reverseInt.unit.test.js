const reverseInt = require('./reverseInt')

test('function exists', () => {
    expect(reverseInt).toBeDefined();
});

test('reverses 123', () => {
    expect(reverseInt(123)).toEqual(321);
});

test('reverses -123', () => {
    expect(reverseInt(-123)).toEqual(-321);
});