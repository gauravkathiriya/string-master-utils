import { countWords } from './stringInfo';

/**
 * Text analytics and statistics utilities.
 * @module analytics
 */

/**
 * Counts the number of sentences in a string.
 * @param {string | null | undefined} str - The string to analyze.
 * @returns {number} The sentence count.
 * @example
 * sentenceCount('Hello world. How are you doing today?') // 2
 * sentenceCount('No punctuation here') // 1
 */
export function sentenceCount(str: string | null | undefined): number {
  if (typeof str !== 'string' || str.trim().length === 0) return 0;

  // Split by sentence terminators (., !, ?) and filter out empty strings
  const sentences = str.trim().split(/[.!?]+/).filter(s => s.trim().length > 0);
  return sentences.length;
}

/**
 * Counts the number of paragraphs in a string based on newline boundaries.
 * @param {string | null | undefined} str - The string to analyze.
 * @returns {number} The paragraph count.
 * @example
 * paragraphCount('First paragraph.\n\nSecond paragraph.') // 2
 */
export function paragraphCount(str: string | null | undefined): number {
  if (typeof str !== 'string' || str.trim().length === 0) return 0;

  const paragraphs = str.split(/\n+/).filter(p => p.trim().length > 0);
  return paragraphs.length;
}

/**
 * Estimates reading time of a string based on words-per-minute (WPM).
 * @param {string | null | undefined} str - The text to estimate reading time for.
 * @param {number} [wpm=200] - Words read per minute. Default is 200.
 * @returns {{ minutes: number, seconds: number, text: string }} An object containing minutes, seconds, and a text representation.
 * @example
 * readingTime('Some text containing multiple words.', 200) // { minutes: 0, seconds: 2, text: '2 sec read' }
 */
export function readingTime(
  str: string | null | undefined,
  wpm: number = 200
): { minutes: number; seconds: number; text: string } {
  if (typeof str !== 'string') {
    return { minutes: 0, seconds: 0, text: '0 min read' };
  }

  const words = countWords(str);
  if (words === 0) {
    return { minutes: 0, seconds: 0, text: '0 min read' };
  }

  const wordsPerMinute = wpm && wpm > 0 ? wpm : 200;
  const totalSeconds = Math.round((words / wordsPerMinute) * 60);
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const text = minutes > 0 ? `${minutes} min read` : `${seconds} sec read`;

  return { minutes, seconds, text };
}
