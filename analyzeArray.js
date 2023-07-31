function analyzeArray (inArray) {
  if (!Array.isArray(inArray)) throw new TypeError('Parameter is not an array')
  const length = inArray.length
  if (!length) throw new TypeError('Array is empty')
  let sum = 0
  let min
  let max
  for (let i = 0; i < length; i++) {
    if (typeof inArray[i] !== 'number') throw new TypeError('Array contains non-numerical elements')
    sum += inArray[i]
    if (i === 0) {
      min = inArray[i]
      max = inArray[i]
    } else {
      if (inArray[i] < min) min = inArray[i]
      if (inArray[i] > max) max = inArray[i]
    }
  }
  const average = sum / length
  return { average, min, max, length }
}

module.exports = analyzeArray
