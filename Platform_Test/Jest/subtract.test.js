const subtract = require('./subtract')

test('properly subtracts two numbers', () => {
    expect(
        subtract(6, 5)
    ).toBe(1)
})