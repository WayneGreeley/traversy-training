const addParams = require('./addParams');

test('function exists', () => {
    expect(addParams).toBeDefined();
});

test('addParams 0', () => {
    expect(addParams()).toEqual(0);
});

test('addParams 1 2 3', () => {
    expect(addParams(1,2,3)).toEqual(6);
});