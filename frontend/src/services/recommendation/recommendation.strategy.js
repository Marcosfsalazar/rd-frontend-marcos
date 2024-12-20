
/**
 * @typedef {Object} Product
 * @property {number} id
 * @property {string} name
 * @property {string} category
 * @property {string[]} preferences
 * @property {string[]} features
 */

/**
 * @callback getRecommendations
 * @param {string[]} preferences
 * @param {string[]} features
 * @param {Product[]} products
 * @returns {Product[]}
 */

