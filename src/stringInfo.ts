/**
 * String information and analysis utilities.
 * @module stringInfo
 */

/**
 * Counts the number of words in a string.
 * @param {string} str - The string to analyze.
 * @returns {number} The number of words in the string.
 * @example
 * countWords('hello world') // 2
 * countWords('hello   world   test') // 3
 * countWords('') // 0
 */
export function countWords(str: string | null | undefined): number {
  if (!str || typeof str !== 'string') return 0;
  const words = str.trim().split(/\s+/);
  return words.filter(word => word.length > 0).length;
}

/**
 * Counts the number of characters in a string (excluding whitespace if specified).
 * @param {string} str - The string to analyze.
 * @param {boolean} [excludeWhitespace=false] - If true, excludes whitespace from count.
 * @returns {number} The number of characters in the string.
 * @example
 * countChars('hello world') // 11
 * countChars('hello world', true) // 10
 * countChars('test') // 4
 */
export function countChars(str: string | null | undefined, excludeWhitespace: boolean = false): number {
  if (!str || typeof str !== 'string') return 0;
  if (excludeWhitespace) {
    return str.replace(/\s/g, '').length;
  }
  return str.length;
}

/**
 * Reverses a string.
 * @param {string} str - The string to reverse.
 * @returns {string} The reversed string.
 * @example
 * reverseString('hello') // 'olleh'
 * reverseString('world') // 'dlrow'
 */
export function reverseString(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  return str.split('').reverse().join('');
}

/**
 * Checks if a string is empty (has no characters).
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is empty, false otherwise.
 * @example
 * isEmpty('') // true
 * isEmpty('   ') // false (contains whitespace)
 * isEmpty('hello') // false
 */
export function isEmpty(str: string | null | undefined): boolean {
  if (str === null || str === undefined) return true;
  if (typeof str !== 'string') return true;
  return str.length === 0;
}

/**
 * Checks if a string is blank (empty or contains only whitespace).
 * @param {string} str - The string to check.
 * @returns {boolean} True if the string is blank, false otherwise.
 * @example
 * isBlank('') // true
 * isBlank('   ') // true
 * isBlank('\t\n') // true
 * isBlank('hello') // false
 */
export function isBlank(str: string | null | undefined): boolean {
  if (str === null || str === undefined) return true;
  if (typeof str !== 'string') return true;
  return str.trim().length === 0;
}

