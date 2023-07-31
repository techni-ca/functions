/* globals test, expect */

test('simple reverseString', () =>
  expect(reverseString('abc')).toBe('cba')
)
test('reverse of empty string', () =>
  expect(reverseString('')).toBe('')
)
test('reverse of single character', () =>
  expect(reverseString('X')).toBe('X')
)
test('reverse a mixture of cases, punctuation and numerals', () =>
  expect(reverseString("Mad4m, I'm 4dam!")).toBe("!mad4 m'I ,m4daM")
)
function reverseString (input) {
  const forward = [...input]
  const backward = []
  while (forward.length > 0) {
    backward.push(forward.pop())
  }
  return backward.join('')
}
