const flattenArray = require('./flattenArray');

test('function exists', () => {
    expect(flattenArray).toBeDefined();
});

test('flattenArray simple flatten', () => {
    expect(flattenArray([[1, 2], [3, 4], [5, 6], [7]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});

test('flattenArray complex flatten', () => {
    expect(flattenArray([[1],[2,3]])).toEqual([1,2,3]);
});

test('flattenArray empty', () => {
    expect(flattenArray([])).toEqual([]);
});
