const isPalindrome = require('./palindrome')

test('function exists', () => {
    expect(isPalindrome).toBeDefined();
});

test('isPalindrome racecar truthy', () => {
    expect(isPalindrome('racecar')).toBeTruthy();
});

test('isPalindrome superman falsy', () => {
    expect(isPalindrome('superman')).toBeFalsy();
});