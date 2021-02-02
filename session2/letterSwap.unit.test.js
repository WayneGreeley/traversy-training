const letterSwap = require('./letterSwap');

test('function exists', () => {
    expect(letterSwap).toBeDefined();
});

test('letterSwap : hello there === Ifmmp UIfsf', () => {
    expect(letterSwap('hello there')).toEqual('Ifmmp UIfsf');
});