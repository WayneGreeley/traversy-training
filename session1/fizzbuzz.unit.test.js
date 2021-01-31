const fizzbuzz = require('./fizzbuzz')

test('function exists', () => {
    expect(fizzbuzz).toBeDefined();
});

test('fizzbuzz 0', () => {
    expect(fizzbuzz(0)).toEqual([]);
});

test('fizzbuzz ', () => {
    expect(fizzbuzz(20)).toEqual([1,2,'fizz',4,'buzz','fizz',7,8,'fizz','buzz',11,'fizz',13,14,'fizzbuzz',16,17,'fizz',19,'buzz']);
});