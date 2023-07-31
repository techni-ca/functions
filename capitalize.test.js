/* globals test, expect */

test('capitalize bob', () =>
  expect(capitalize('bob')).toBe('Bob')
)
test('capitalize fred', () =>
  expect(capitalize('fred')).toBe('Fred')
)
test('capitalize BOB', () =>
  expect(capitalize('BOB')).toBe('BOB')
)
test('capitalize Fred', () =>
  expect(capitalize('Fred')).toBe('Fred')
)
test('capitalize empty string', () =>
  expect(capitalize('')).toBe('')
)
test('capitalize x', () =>
  expect(capitalize('x')).toBe('X')
)
test('capitalize X', () =>
  expect(capitalize('x')).toBe('X')
)
test('capitalize 1', () =>
  expect(capitalize('1')).toBe('1')
)
test('capitalize !', () =>
  expect(capitalize('!')).toBe('!')
)
function capitalize (input) {
  if (input.length < 1) return input
  const firstLetter = input[0]
  const remainingLetters = input.slice(1)
  return firstLetter.toUpperCase() + remainingLetters
}
