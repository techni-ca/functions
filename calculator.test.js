/* globals test, expect */

const Calculator = require('./Calculator.js')

test('add', () =>
  expect(Calculator.add(6, 2)).toBe(8)
)
test('subtract', () =>
  expect(Calculator.subtract(6, 2)).toBe(4)
)
test('multiply', () =>
  expect(Calculator.multiply(6, 2)).toBe(12)
)
test('divide', () =>
  expect(Calculator.divide(6, 2)).toBe(3)
)
test('division by 0', () =>
  expect(Calculator.divide(1, 0)).toBe(Infinity)
)
