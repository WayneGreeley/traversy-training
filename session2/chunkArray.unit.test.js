const chunkArray = require('./chunkArray')

test('function exists', () => {
    expect(chunkArray).toBeDefined();
});

test('chunkArray len 3', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 3)).toEqual([[1, 2, 3],[4, 5, 6],[7]]);
});

test('chunkArray len 2', () => {
    expect(chunkArray([1, 2, 3, 4, 5, 6, 7], 2)).toEqual([[1, 2],[3, 4],[5, 6],[7]]);
});

test('chunkArray len 1', () => {
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1],[2],[3]]);
});