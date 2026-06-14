export * from './src/caseConversions';
export * from './src/cleaning';
export * from './src/advanced';
export * from './src/validation';
export * from './src/seo';
export * from './src/ai';
export * from './src/url';
export * from './src/comparison';
export * from './src/encoding';

export {
    countWords,
    countChars,
    reverseString,
    isEmpty,
    isBlank,
    countOccurrences,
    getSimilarity
} from './src/stringInfo';

export {
    sentenceCount,
    paragraphCount
} from './src/analytics';

import { readingTime as simpleReadingTime } from './src/stringInfo';
import { readingTime as complexReadingTime } from './src/analytics';

export function readingTime(str: string | null | undefined): number;
export function readingTime(str: string | null | undefined, wpm: number): { minutes: number; seconds: number; text: string };
export function readingTime(
    str: string | null | undefined,
    wpm?: number
): number | { minutes: number; seconds: number; text: string } {
    if (wpm === undefined) {
        return simpleReadingTime(str);
    }
    return complexReadingTime(str, wpm);
}
