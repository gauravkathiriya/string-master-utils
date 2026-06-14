/**
 * String information and analysis utilities.
 * @module stringInfo
 */

import { similarity } from './comparison';

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

/**
 * Counts the occurrences of a substring within a string.
 * @param {string | null | undefined} str - The target string.
 * @param {string} substr - The substring to count.
 * @returns {number} The count of occurrences.
 * @example
 * countOccurrences('hello world hello', 'hello') // 2
 * countOccurrences('banana', 'an') // 2
 */
export function countOccurrences(str: string | null | undefined, substr: string): number {
  if (typeof str !== 'string' || typeof substr !== 'string' || substr.length === 0) return 0;

  let count = 0;
  let pos = str.indexOf(substr);

  while (pos !== -1) {
    count++;
    pos = str.indexOf(substr, pos + substr.length);
  }

  return count;
}

/**
 * Simple estimate of reading time in minutes (returns minutes as a number).
 * Assumes average reading speed of 200 words per minute.
 * @param {string | null | undefined} str - The text to estimate reading time for.
 * @returns {number} The estimated reading time in minutes.
 * @example
 * readingTime('A brief string.') // 1
 */
export function readingTime(str: string | null | undefined): number {
  if (typeof str !== 'string') return 0;
  const words = countWords(str);
  if (words === 0) return 0;
  return Math.ceil(words / 200);
}

/**
 * Calculates a similarity score between two strings using Levenshtein distance (normalized between 0 and 1).
 * @param {string | null | undefined} a - The first string.
 * @param {string | null | undefined} b - The second string.
 * @returns {number} The similarity score from 0 to 1.
 * @example
 * getSimilarity('apple', 'aple') // 0.8
 */
export function getSimilarity(a: string | null | undefined, b: string | null | undefined): number {
  return similarity(a, b);
}
