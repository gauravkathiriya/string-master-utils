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

/**
 * Capitalizes the first character of a string (Unicode-safe).
 * @param {string | null | undefined} str - The string to capitalize.
 * @returns {string} The capitalized string.
 * @example
 * capitalize('hello') // 'Hello'
 * capitalize('world') // 'World'
 */
export function capitalize(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  const chars = [...str];
  if (chars.length === 0) return '';
  return chars[0].toUpperCase() + chars.slice(1).join('');
}

/**
 * Strips HTML tags from a string.
 * @param {string | null | undefined} str - The string to strip tags from.
 * @returns {string} The plain text string.
 * @example
 * stripHtml('<p>Hello <strong>World</strong>!</p>') // 'Hello World!'
 */
export function stripHtml(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  return str.replace(/<[^>]*>/g, '');
}

/**
 * Escapes HTML characters in a string to prevent XSS.
 * @param {string | null | undefined} str - The string to escape.
 * @returns {string} The escaped string.
 * @example
 * escapeHtml('<div>Hello & "World"</div>') // '&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;'
 */
export function escapeHtml(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  const htmlEscapes: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  return str.replace(/[&<>"']/g, (char) => htmlEscapes[char]);
}

/**
 * Unescapes HTML entities in a string.
 * @param {string | null | undefined} str - The string to unescape.
 * @returns {string} The unescaped string.
 * @example
 * unescapeHtml('&lt;div&gt;Hello &amp; &quot;World&quot;&lt;/div&gt;') // '<div>Hello & "World"</div>'
 */
export function unescapeHtml(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  const htmlUnescapes: Record<string, string> = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&quot;': '"',
    '&#39;': "'",
    '&apos;': "'"
  };
  return str.replace(/&(amp|lt|gt|quot|#39|apos);/g, (entity) => htmlUnescapes[entity] || entity);
}

/**
 * Replaces all occurrences of a search string with a replacement string.
 * @param {string | null | undefined} str - The string to perform replacement on.
 * @param {string} from - The search string to be replaced.
 * @param {string} to - The replacement string.
 * @returns {string} The string with all occurrences replaced.
 * @example
 * replaceAll('banana', 'a', 'o') // 'bonono'
 */
export function replaceAll(str: string | null | undefined, from: string, to: string): string {
  if (typeof str !== 'string') return '';
  if (typeof from !== 'string' || typeof to !== 'string') return str;
  return str.split(from).join(to);
}

/**
 * Masks a string except for a designated number of visible characters at the end (Unicode-safe).
 * @param {string | null | undefined} str - The string to mask.
 * @param {number} [visibleChars=4] - The number of characters to keep visible.
 * @param {string} [maskChar='*'] - The character to use for masking.
 * @returns {string} The masked string.
 * @example
 * mask('4111111111111111', 4) // '************1111'
 * mask('secret', 2, '#') // '####et'
 */
export function mask(
  str: string | null | undefined,
  visibleChars: number = 4,
  maskChar: string = '*'
): string {
  if (typeof str !== 'string') return '';

  const chars = [...str];
  const visible = typeof visibleChars === 'number' && visibleChars >= 0 ? visibleChars : 4;
  const maskC = typeof maskChar === 'string' && maskChar.length > 0 ? maskChar[0] : '*';

  if (chars.length <= visible) return str;

  const maskLength = chars.length - visible;
  return maskC.repeat(maskLength) + chars.slice(maskLength).join('');
}
