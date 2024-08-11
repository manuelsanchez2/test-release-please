const { getRandomNumber } = require('.')

test('getRandomNumber generates a number within the specified range', () => {
  const min = 1
  const max = 10
  const randomNumber = getRandomNumber(min, max)
  expect(randomNumber).toBeGreaterThanOrEqual(min)
  expect(randomNumber).toBeLessThanOrEqual(max)
})

test('getRandomNumber throws an error if arguments are not numbers', () => {
  expect(() => getRandomNumber('a', 10)).toThrow(
    'Both min and max must be numbers'
  )
  expect(() => getRandomNumber(1, 'b')).toThrow(
    'Both min and max must be numbers'
  )
})
