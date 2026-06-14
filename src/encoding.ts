/**
 * Encoding and decoding utilities.
 * @module encoding
 */

/**
 * Encodes a string into Base64 format.
 * @param {string | null | undefined} str - The string to encode.
 * @returns {string} The Base64 encoded string.
 * @example
 * base64Encode('hello') // 'aGVsbG8='
 */
export function base64Encode(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  return Buffer.from(str, 'utf8').toString('base64');
}

/**
 * Decodes a Base64 encoded string back into a plain text string.
 * @param {string | null | undefined} str - The Base64 string to decode.
 * @returns {string} The decoded plain text string, or empty string if decoding fails.
 * @example
 * base64Decode('aGVsbG8=') // 'hello'
 */
export function base64Decode(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  try {
    return Buffer.from(str, 'base64').toString('utf8');
  } catch {
    return '';
  }
}

/**
 * URL encodes a string.
 * @param {string | null | undefined} str - The string to URL encode.
 * @returns {string} The URL encoded string.
 * @example
 * urlEncode('hello world!') // 'hello%20world!'
 */
export function urlEncode(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  return encodeURIComponent(str);
}

/**
 * URL decodes a string.
 * @param {string | null | undefined} str - The string to URL decode.
 * @returns {string} The decoded string, or the original string if decoding fails.
 * @example
 * urlDecode('hello%20world!') // 'hello world!'
 */
export function urlDecode(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';
  try {
    return decodeURIComponent(str);
  } catch {
    return str;
  }
}
