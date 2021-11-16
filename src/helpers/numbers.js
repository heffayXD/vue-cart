/**
 * Returns a string for USD
 * @param {number} number
 * @return {string}
 */
export const formatCurrency = (number) => {
  return `$${number.toFixed(2)}`
}
