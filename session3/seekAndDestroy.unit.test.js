const seekAndDestroy = require('./seekAndDestroy');

test('function exists', () => {
    expect(seekAndDestroy).toBeDefined();
});

test('seekAndDestroy test case', () => {
    expect(seekAndDestroy([2, 3, 4, 6, 6, 'hello'], 2, 6)).toEqual([3, 4, 'hello']);
});
