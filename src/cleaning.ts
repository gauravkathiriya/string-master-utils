/**
 * String cleaning and manipulation utilities.
 * @module cleaning
 */

/**
 * Removes all spaces from a string.
 * @param {string} str - The string to process.
 * @returns {string} The string with all spaces removed.
 * @example
 * removeSpaces('hello world') // 'helloworld'
 * removeSpaces('  test  string  ') // 'teststring'
 */
export function removeSpaces(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\s+/g, '');
}

/**
 * Removes extra spaces, keeping only single spaces between words.
 * @param {string} str - The string to process.
 * @returns {string} The string with extra spaces removed.
 * @example
 * removeExtraSpaces('hello    world') // 'hello world'
 * removeExtraSpaces('  test   string  ') // 'test string'
 */
export function removeExtraSpaces(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.trim().replace(/\s+/g, ' ');
}

/**
 * Removes all special characters from a string, keeping only alphanumeric characters and spaces.
 * @param {string} str - The string to process.
 * @returns {string} The string with special characters removed.
 * @example
 * removeSpecialChars('hello@world#123!') // 'helloworld123'
 * removeSpecialChars('test-string_123') // 'teststring123'
 */
export function removeSpecialChars(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/[^a-zA-Z0-9\s]/g, '');
}

/**
 * Removes all numbers from a string.
 * @param {string} str - The string to process.
 * @returns {string} The string with all numbers removed.
 * @example
 * removeNumbers('hello123world456') // 'helloworld'
 * removeNumbers('test123') // 'test'
 */
export function removeNumbers(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\d/g, '');
}

/**
 * Keeps only numbers from a string, removing all other characters.
 * @param {string} str - The string to process.
 * @returns {string} A string containing only numbers.
 * @example
 * keepOnlyNumbers('hello123world456') // '123456'
 * keepOnlyNumbers('price: $99.99') // '9999'
 */
export function keepOnlyNumbers(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.replace(/\D/g, '');
}

/**
 * Trims whitespace from the beginning and end of a string, and removes all internal whitespace.
 * @param {string} str - The string to process.
 * @returns {string} The string with all whitespace removed.
 * @example
 * trimAll('  hello world  ') // 'helloworld'
 * trimAll('  test   string  ') // 'teststring'
 */
export function trimAll(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.trim().replace(/\s+/g, '');
}

/**
 * Truncates a string to a specified length, optionally adding an ellipsis.
 * @param {string} str - The string to truncate.
 * @param {number} limit - The maximum length of the truncated string.
 * @param {string} [suffix='...'] - Optional suffix to append if string is truncated.
 * @returns {string} The truncated string.
 * @example
 * truncate('hello world', 5) // 'hello...'
 * truncate('hello world', 11) // 'hello world'
 * truncate('test', 10, '...') // 'test'
 */
export function truncate(str: string | null | undefined, limit: number, suffix: string = '...'): string {
  if (!str || typeof str !== 'string') return '';
  if (typeof limit !== 'number' || limit < 0) return str;
  
  if (str.length <= limit) return str;
  return str.slice(0, limit) + suffix;
}

