/* globals test, expect */
const analyzeArray = require('./analyzeArray.js')

const longArray = []
for (let i = 1; i < 10000000; i++) {
  longArray.push(i)
}

test('simple arrays with positive values', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  })
  expect(analyzeArray([4, 3, 2, 1])).toEqual({
    average: 2.5,
    min: 1,
    max: 4,
    length: 4
  })
})
test('arrays with negative values, mix of positive and negative values', () => {
  expect(analyzeArray([-1, -2, -3])).toEqual({
    average: -2,
    max: -1,
    min: -3,
    length: 3
  })
  expect(analyzeArray([-5, 0, 5])).toEqual({
    average: 0,
    max: 5,
    min: -5,
    length: 3
  })
})

test('arrays of length one', () => {
  expect(analyzeArray([5])).toEqual({
    average: 5,
    min: 5,
    max: 5,
    length: 1
  })
  expect(analyzeArray([-5])).toEqual({
    average: -5,
    min: -5,
    max: -5,
    length: 1
  })
  expect(analyzeArray([0])).toEqual({
    average: 0,
    min: 0,
    max: 0,
    length: 1
  })
})
test('very long array', () =>
  expect(analyzeArray(longArray)).toEqual({
    average: 5000000,
    max: 9999999,
    min: 1,
    length: 9999999
  })
)
test('throws an error if parameter is not a valid array of numbers', () => {
  expect(() => analyzeArray()).toThrow(TypeError)
  expect(() => analyzeArray(5)).toThrow(TypeError)
  expect(() => analyzeArray('bob')).toThrow(TypeError)
  expect(() => analyzeArray('1')).toThrow(TypeError)
  expect(() => analyzeArray([])).toThrow(TypeError)
  expect(() => analyzeArray([1, 2, 'a', 3])).toThrow(TypeError)
  expect(() => analyzeArray([1, 2, '3', 4])).toThrow(TypeError)
  expect(() => analyzeArray([1, 2, 3, , 4])).toThrow(TypeError) // eslint-disable-line no-sparse-arrays
})
