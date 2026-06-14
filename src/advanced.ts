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

/**
 * Replaces placeholders like `{key}` in a template string with corresponding values from variables object.
 * @param {string | null | undefined} str - The template string.
 * @param {Record<string, any>} vars - Key-value variables to substitute.
 * @returns {string} The formatted string.
 * @example
 * template('Hi {name}!', { name: 'Gaurav' }) // 'Hi Gaurav!'
 */
export function template(str: string | null | undefined, vars: Record<string, any>): string {
  if (typeof str !== 'string') return '';
  if (!vars || typeof vars !== 'object') return str;

  return str.replace(/\{([^{}]+)\}/g, (match, key) => {
    const val = vars[key];
    return val !== undefined ? String(val) : match;
  });
}

/**
 * Extracts all numeric values (integers and decimals) from a string into an array of numbers.
 * @param {string | null | undefined} str - The input string.
 * @returns {number[]} An array of extracted numbers.
 * @example
 * extractNumbers('The price is $99.99 for 2 items.') // [ 99.99, 2 ]
 */
export function extractNumbers(str: string | null | undefined): number[] {
  if (typeof str !== 'string') return [];

  const matches = str.match(/-?\d+(?:\.\d+)?/g);
  if (!matches) return [];

  return matches.map(Number).filter(n => !isNaN(n));
}

/**
 * Extracts all email addresses found within a string.
 * @param {string | null | undefined} str - The input string.
 * @returns {string[]} An array of extracted email strings.
 * @example
 * extractEmails('Contact us at info@example.com or support@test.org') // [ 'info@example.com', 'support@test.org' ]
 */
export function extractEmails(str: string | null | undefined): string[] {
  if (typeof str !== 'string') return [];

  const matches = str.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g);
  return matches ? matches : [];
}

/**
 * Extracts all URLs (starting with http:// or https://) found within a string.
 * @param {string | null | undefined} str - The input string.
 * @returns {string[]} An array of extracted URL strings.
 * @example
 * extractUrls('Check https://google.com or http://test.org/path') // [ 'https://google.com', 'http://test.org/path' ]
 */
export function extractUrls(str: string | null | undefined): string[] {
  if (typeof str !== 'string') return [];

  const regex = /https?:\/\/[^\s/$.?#].[^\s]*/gi;
  const matches = str.match(regex);
  return matches ? matches : [];
}

/**
 * Splits a string into chunks of a specified maximum size (Unicode-safe).
 * @param {string | null | undefined} str - The string to split.
 * @param {number} size - The size of each chunk.
 * @returns {string[]} An array of string chunks.
 * @example
 * chunk('hello', 2) // [ 'he', 'll', 'o' ]
 * chunk('café', 3) // [ 'caf', 'é' ]
 */
export function chunk(str: string | null | undefined, size: number): string[] {
  if (typeof str !== 'string') return [];
  const sizeNum = typeof size === 'number' ? size : 0;
  if (sizeNum <= 0) return [str];

  const chars = [...str];
  const chunks: string[] = [];

  for (let i = 0; i < chars.length; i += sizeNum) {
    chunks.push(chars.slice(i, i + sizeNum).join(''));
  }

  return chunks;
}
