/**
 * String comparison, similarity, and matching utilities.
 * @module comparison
 */

/**
 * Calculates the Levenshtein distance between two strings (Unicode-safe).
 * @param {string | null | undefined} a - The first string.
 * @param {string | null | undefined} b - The second string.
 * @returns {number} The edit distance between the two strings.
 * @example
 * levenshteinDistance('kitten', 'sitting') // 3
 */
export function levenshteinDistance(a: string | null | undefined, b: string | null | undefined): number {
  const strA = typeof a === 'string' ? a : a === null || a === undefined ? '' : String(a);
  const strB = typeof b === 'string' ? b : b === null || b === undefined ? '' : String(b);

  const arrA = [...strA];
  const arrB = [...strB];

  const m = arrA.length;
  const n = arrB.length;

  if (m === 0) return n;
  if (n === 0) return m;

  let prevRow = Array.from({ length: n + 1 }, (_, i) => i);
  let currRow = new Array(n + 1);

  for (let i = 1; i <= m; i++) {
    currRow[0] = i;
    for (let j = 1; j <= n; j++) {
      const cost = arrA[i - 1] === arrB[j - 1] ? 0 : 1;
      currRow[j] = Math.min(
        currRow[j - 1] + 1,
        prevRow[j] + 1,
        prevRow[j - 1] + cost
      );
    }
    const temp = prevRow;
    prevRow = currRow;
    currRow = temp;
  }

  return prevRow[n];
}

/**
 * Calculates similarity between two strings as a normalized score between 0 and 1.
 * @param {string | null | undefined} a - The first string.
 * @param {string | null | undefined} b - The second string.
 * @returns {number} The similarity score from 0 (completely different) to 1 (identical).
 * @example
 * similarity('apple', 'aple') // 0.8
 */
export function similarity(a: string | null | undefined, b: string | null | undefined): number {
  const strA = typeof a === 'string' ? a : a === null || a === undefined ? '' : String(a);
  const strB = typeof b === 'string' ? b : b === null || b === undefined ? '' : String(b);

  if (strA === strB) return 1;

  const arrA = [...strA];
  const arrB = [...strB];

  const maxLen = Math.max(arrA.length, arrB.length);
  if (maxLen === 0) return 1;

  const dist = levenshteinDistance(strA, strB);
  return 1 - dist / maxLen;
}

/**
 * Performs a case-insensitive fuzzy match (sequence match) to check if the pattern characters exist in the same order inside the string.
 * @param {string | null | undefined} str - The target string.
 * @param {string | null | undefined} pattern - The search pattern.
 * @returns {boolean} True if the pattern is a fuzzy match, false otherwise.
 * @example
 * fuzzyMatch('JavaScript', 'js') // true
 * fuzzyMatch('application', 'api') // true
 * fuzzyMatch('test', 'abc') // false
 */
export function fuzzyMatch(str: string | null | undefined, pattern: string | null | undefined): boolean {
  if (typeof str !== 'string' || typeof pattern !== 'string') return false;

  const strChars = [...str.toLowerCase()];
  const patChars = [...pattern.toLowerCase()];

  let strIdx = 0;
  let patIdx = 0;

  while (strIdx < strChars.length && patIdx < patChars.length) {
    if (strChars[strIdx] === patChars[patIdx]) {
      patIdx++;
    }
    strIdx++;
  }

  return patIdx === patChars.length;
}
