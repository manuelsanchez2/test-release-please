/**
 * Generates a random number between min and max (inclusive).
 * @param {number} min - The minimum number in the range.
 * @param {number} max - The maximum number in the range.
 * @returns {number} A random number between min and max.
 */
function getRandomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Both min and max must be numbers')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}

module.exports = { getRandomNumber }
