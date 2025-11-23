/**
 * Advanced string manipulation utilities.
 * @module advanced
 */

/**
 * Generates a random string of specified length.
 * @param {number} length - The length of the random string to generate.
 * @param {string} [charset='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'] - Optional custom character set.
 * @returns {string} A random string of the specified length.
 * @example
 * randomString(10) // 'aB3dEfG9hI'
 * randomString(5, '0123456789') // '38472'
 * randomString(8, 'abc') // 'abcabcaa'
 */
export function randomString(
  length: number,
  charset: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
): string {
  if (typeof length !== 'number' || length < 0) return '';
  if (typeof charset !== 'string' || charset.length === 0) return '';
  
  let result = '';
  for (let i = 0; i < length; i++) {
    result += charset.charAt(Math.floor(Math.random() * charset.length));
  }
  return result;
}

/**
 * Generates a URL-friendly slug from a string.
 * @param {string} str - The string to convert to a slug.
 * @returns {string} A URL-friendly slug.
 * @example
 * generateSlug('Hello World!') // 'hello-world'
 * generateSlug('This is a Test String') // 'this-is-a-test-string'
 * generateSlug('JavaScript & TypeScript') // 'javascript-typescript'
 */
export function generateSlug(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_]+/g, '-')
    .replace(/-+/g, '-')
    .replace(/^-+|-+$/g, '');
}

/**
 * Compares two strings and returns a comparison result.
 * @param {string} a - The first string to compare.
 * @param {string} b - The second string to compare.
 * @param {boolean} [caseSensitive=false] - Whether the comparison should be case-sensitive.
 * @returns {number} Returns -1 if a < b, 0 if a === b, 1 if a > b.
 * @example
 * compareStrings('apple', 'banana') // -1
 * compareStrings('banana', 'apple') // 1
 * compareStrings('hello', 'hello') // 0
 * compareStrings('Hello', 'hello', true) // -1
 * compareStrings('Hello', 'hello', false) // 0
 */
export function compareStrings(a: string | null | undefined, b: string | null | undefined, caseSensitive: boolean = false): number {
  if (typeof a !== 'string') a = String(a);
  if (typeof b !== 'string') b = String(b);
  
  const strA = caseSensitive ? a : a.toLowerCase();
  const strB = caseSensitive ? b : b.toLowerCase();
  
  if (strA < strB) return -1;
  if (strA > strB) return 1;
  return 0;
}

/**
 * Normalizes Unicode characters in a string (e.g., removes diacritics).
 * @param {string} str - The string to normalize.
 * @returns {string} The normalized string.
 * @example
 * normalizeUnicode('café') // 'cafe'
 * normalizeUnicode('naïve') // 'naive'
 * normalizeUnicode('résumé') // 'resume'
 */
export function normalizeUnicode(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

