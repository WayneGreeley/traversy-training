const longestWord = require('./longestWord')

test('function exists', () => {
    expect(longestWord).toBeDefined();
});

test('longestWord partner from howdy partner', () => {
    expect(longestWord('howdy partner')).toEqual('partner');
});

test('longestWord hello,there from hello there yall', () => {
    expect(longestWord('hello there yall')).toEqual(['hello','there']);
});