const {add,sub} = require('../index')

test('add two numbers', () => {
    expect(add(1,2)).toBe(3);
});

test('sub two numbers', () => {
    expect(sub(2,1)).toBe(1);
});
