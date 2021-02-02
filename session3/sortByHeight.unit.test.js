const sortByHeight = require('./sortByHeight');

test('function exists', () => {
    expect(sortByHeight).toBeDefined();
});

test('sortByHeight empty', () => {
    expect(sortByHeight([])).toEqual([]);
});

test('sortByHeight -1', () => {
    expect(sortByHeight([-1])).toEqual([-1]);
});

test('sortByHeight 5', () => {
    expect(sortByHeight([5])).toEqual([5]);
});

test('sortByHeight 3 -1 1', () => {
    expect(sortByHeight([3,-1,1])).toEqual([1,-1,3]);
});

test('sortByHeight 3 -1 1', () => {
    expect(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180])).toEqual([-1, 150, 160, 170, -1, -1, 180, 190]);
});
