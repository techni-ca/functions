/* globals test, expect, describe */

describe('caesarCipher tests', () => {
  test('abyz -> bcza', () =>
    expect(caesarCipher('abyz')).toBe('bcza')
  )
  test('bcza -> cdab', () =>
    expect(caesarCipher('bcza')).toBe('cdab')
  )
  test('ABYZ -> BCZA', () =>
    expect(caesarCipher('ABYZ')).toBe('BCZA')
  )
  test('10 -> 21', () =>
    expect(caesarCipher('10')).toBe('21')
  )
  test('empty string', () =>
    expect(caesarCipher('')).toBe('')
  )
  test('zA01010aZ! -> aB12121bA!', () =>
    expect(caesarCipher('zA01010aZ!')).toBe('aB12121bA!')
  )
})
function caesarCipher (inputString) {
  let outputString = ''
  for (let i = 0; i < inputString.length; i++) {
    outputString += shift(inputString[i])
  }
  return outputString
}
function shift (inputChar) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyza'
  const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZA'
  const numbers = '12345678901'
  let index = alphabet.indexOf(inputChar) + 1
  if (index) return alphabet[index]
  index = ALPHABET.indexOf(inputChar) + 1
  if (index) return ALPHABET[index]
  index = numbers.indexOf(inputChar) + 1
  if (index) return numbers[index]
  return inputChar
}
