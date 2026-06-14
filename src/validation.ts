/**
 * Validation utilities for strings.
 * @module validation
 */

/**
 * Validates if the string is a valid email format.
 * @param {string | null | undefined} str - The string to validate.
 * @returns {boolean} True if the string is a valid email, false otherwise.
 * @example
 * isEmail('test@example.com') // true
 * isEmail('invalid-email') // false
 */
export function isEmail(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  // A robust email regex matching standard formats
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return emailRegex.test(str);
}

/**
 * Validates if the string is a valid URL.
 * @param {string | null | undefined} str - The string to validate.
 * @returns {boolean} True if the string is a valid URL, false otherwise.
 * @example
 * isURL('https://google.com') // true
 * isURL('ftp://files.test.org') // true
 * isURL('not-a-url') // false
 */
export function isURL(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  try {
    const url = new URL(str);
    return url.protocol === 'http:' || url.protocol === 'https:' || url.protocol === 'ftp:' || url.protocol === 'ftps:';
  } catch {
    return false;
  }
}

/**
 * Validates if the string is a valid phone number.
 * Supported locales: 'IN' (India), 'US' (United States), 'UK' (United Kingdom).
 * @param {string | null | undefined} str - The phone number string to validate.
 * @param {'IN' | 'US' | 'UK'} [locale='IN'] - The locale to validate against.
 * @returns {boolean} True if the string is a valid phone number, false otherwise.
 * @example
 * isPhone('+919876543210', 'IN') // true
 * isPhone('(555) 555-5555', 'US') // true
 * isPhone('07123456789', 'UK') // true
 */
export function isPhone(str: string | null | undefined, locale: 'IN' | 'US' | 'UK' = 'IN'): boolean {
  if (typeof str !== 'string') return false;

  // Remove spaces, hyphens, and parentheses for uniform validation
  const cleaned = str.replace(/[\s().-]/g, '');

  if (locale === 'US') {
    return /^(?:\+?1)?[2-9]\d{9}$/.test(cleaned);
  }
  if (locale === 'UK') {
    return /^(?:\+?44|0)?[1-9]\d{8,9}$/.test(cleaned);
  }
  return /^(?:\+?91|0)?[6-9]\d{9}$/.test(cleaned);
}

/**
 * Checks if the string contains only digits.
 * @param {string | null | undefined} str - The string to check.
 * @returns {boolean} True if the string contains only digits, false otherwise.
 * @example
 * isNumeric('12345') // true
 * isNumeric('-123') // false
 * isNumeric('12.3') // false
 */
export function isNumeric(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  return /^\d+$/.test(str);
}

/**
 * Checks if the string contains only alphabetic characters.
 * @param {string | null | undefined} str - The string to check.
 * @returns {boolean} True if the string contains only letters, false otherwise.
 * @example
 * isAlpha('HelloWorld') // true
 * isAlpha('Hello123') // false
 */
export function isAlpha(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  return /^[a-zA-Z]+$/.test(str);
}

/**
 * Checks if the string contains only alphanumeric characters.
 * @param {string | null | undefined} str - The string to check.
 * @returns {boolean} True if the string is alphanumeric, false otherwise.
 * @example
 * isAlphanumeric('Hello123') // true
 * isAlphanumeric('Hello_123') // false
 */
export function isAlphanumeric(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  return /^[a-zA-Z0-9]+$/.test(str);
}

/**
 * Checks if the string is a strong password (minimum 8 characters, at least one uppercase letter, one lowercase letter, one number, and one special symbol).
 * @param {string | null | undefined} str - The password to validate.
 * @returns {boolean} True if the password is strong, false otherwise.
 * @example
 * isStrongPassword('P@ssw0rd123') // true
 * isStrongPassword('weakpass') // false
 */
export function isStrongPassword(str: string | null | undefined): boolean {
  if (typeof str !== 'string') return false;
  const chars = [...str];
  if (chars.length < 8) return false;

  const hasUpper = /[A-Z]/.test(str);
  const hasLower = /[a-z]/.test(str);
  const hasNumber = /\d/.test(str);
  const hasSymbol = /[^A-Za-z0-9]/.test(str);

  return hasUpper && hasLower && hasNumber && hasSymbol;
}
