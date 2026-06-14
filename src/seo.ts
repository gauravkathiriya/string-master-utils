/**
 * SEO-related string utilities.
 * @module seo
 */

/**
 * Generates a URL-friendly slug from a string with options.
 * @param {string | null | undefined} str - The string to slugify.
 * @param {Object} [options] - Configuration options.
 * @param {string} [options.separator='-'] - The separator to use.
 * @param {boolean} [options.lowercase=true] - Whether to lowercase the slug.
 * @param {boolean} [options.strict=true] - Whether to remove special characters (only keep alphanumeric and separator).
 * @returns {string} The URL-friendly slug.
 * @example
 * slugify('Hello World!') // 'hello-world'
 * slugify('Hello World!', { separator: '_', lowercase: false }) // 'Hello_World'
 */
export function slugify(
  str: string | null | undefined,
  options?: { separator?: string; lowercase?: boolean; strict?: boolean }
): string {
  if (typeof str !== 'string') return '';

  const separator = options?.separator !== undefined ? options.separator : '-';
  const lowercase = options?.lowercase !== undefined ? options.lowercase : true;
  const strict = options?.strict !== undefined ? options.strict : true;
  const escapedSep = separator.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');

  let result = str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  if (lowercase) {
    result = result.toLowerCase();
  }

  if (strict) {
    const regex = new RegExp(`[^a-zA-Z0-9\\s${escapedSep}]`, 'g');
    result = result.replace(regex, '');
  }

  const replaceRegex = new RegExp(`[\\s\\-_${escapedSep}]+`, 'g');
  result = result.replace(replaceRegex, separator);

  const startSepRegex = new RegExp(`^${escapedSep}`);
  const endSepRegex = new RegExp(`${escapedSep}$`);
  result = result.replace(startSepRegex, '').replace(endSepRegex, '');

  return result;
}

/**
 * Converts a slug back into capitalized, space-separated words.
 * @param {string | null | undefined} str - The slug to deslugify.
 * @returns {string} The deslugified and formatted string.
 * @example
 * deslugify('hello-world') // 'Hello World'
 * deslugify('this_is_a_test') // 'This Is A Test'
 */
export function deslugify(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';

  return str
    .replace(/[-_]+/g, ' ')
    .trim()
    .split(/\s+/)
    .map(word => {
      if (!word) return '';
      const chars = [...word];
      return chars[0].toUpperCase() + chars.slice(1).join('');
    })
    .join(' ');
}

/**
 * Truncates a string at word boundary without cutting words in half, appending an ellipsis.
 * @param {string | null | undefined} str - The string to truncate.
 * @param {number} maxLength - The maximum length of the output string (including ellipsis).
 * @returns {string} The truncated string.
 * @example
 * truncateSeo('Hello beautiful world', 15) // 'Hello...'
 * truncateSeo('Hello beautiful world', 19) // 'Hello beautiful...'
 */
export function truncateSeo(str: string | null | undefined, maxLength: number): string {
  if (typeof str !== 'string') return '';
  if (typeof maxLength !== 'number' || maxLength <= 0) return '';
  if (str.length <= maxLength) return str;

  const limit = maxLength - 3;
  if (limit <= 0) {
    return '...'.slice(0, maxLength);
  }

  const subStr = str.slice(0, limit);
  const lastSpace = subStr.lastIndexOf(' ');

  if (lastSpace > 0) {
    return subStr.slice(0, lastSpace).trim() + '...';
  }

  return subStr + '...';
}

/**
 * Generates a meta title truncated to maximum 60 characters, appending site name if provided.
 * @param {string | null | undefined} str - The main page title.
 * @param {string} [siteName] - Optional site name to append.
 * @returns {string} The generated meta title.
 * @example
 * generateMetaTitle('My First Blog Post', 'MySite') // 'My First Blog Post | MySite'
 * generateMetaTitle('Very Long Title that exceeds the limit of meta title generation', 'MySite') // 'Very Long Title that exceeds the limit of... | MySite'
 */
export function generateMetaTitle(str: string | null | undefined, siteName?: string): string {
  if (typeof str !== 'string') return '';

  const cleanTitle = str.trim();
  if (!siteName || typeof siteName !== 'string') {
    return cleanTitle.length > 60 ? truncateSeo(cleanTitle, 60) : cleanTitle;
  }

  const suffix = ` | ${siteName.trim()}`;
  if ((cleanTitle + suffix).length <= 60) {
    return cleanTitle + suffix;
  }

  const maxTitleLen = 60 - suffix.length;
  if (maxTitleLen <= 3) {
    return truncateSeo(cleanTitle + suffix, 60);
  }

  const truncatedTitle = truncateSeo(cleanTitle, maxTitleLen);
  return truncatedTitle + suffix;
}

/**
 * Generates a meta description truncated at word boundaries to maximum 160 characters.
 * @param {string | null | undefined} str - The description text.
 * @returns {string} The generated meta description.
 * @example
 * generateMetaDescription('Short description.') // 'Short description.'
 * generateMetaDescription('A very long text that describes the page contents in extensive detail and must be truncated because search engines show only up to 160 characters in search results.') // 'A very long text that describes the page contents in extensive detail and must be...'
 */
export function generateMetaDescription(str: string | null | undefined): string {
  if (typeof str !== 'string') return '';

  const clean = str.trim().replace(/\s+/g, ' ');
  if (clean.length <= 160) return clean;

  return truncateSeo(clean, 160);
}

/**
 * Extracts key phrases from a text by removing stop words and returning the top N words by frequency.
 * @param {string | null | undefined} str - The text to extract keywords from.
 * @param {number} [topN=5] - Number of keywords to return.
 * @returns {string[]} An array of top keywords.
 * @example
 * extractKeywords('TypeScript is a strongly typed programming language that builds on JavaScript.', 3) // [ 'typescript', 'programming', 'language' ]
 */
export function extractKeywords(str: string | null | undefined, topN?: number): string[] {
  if (typeof str !== 'string') return [];

  const stopwords = new Set([
    'the', 'a', 'an', 'and', 'or', 'but', 'is', 'are', 'was', 'were', 'to', 'in', 'of', 'for', 'on', 'with',
    'at', 'by', 'from', 'this', 'that', 'these', 'those', 'it', 'its', 'they', 'them', 'their', 'you',
    'your', 'he', 'him', 'his', 'she', 'her', 'we', 'us', 'our', 'as', 'be', 'been', 'being', 'have',
    'has', 'had', 'do', 'does', 'did', 'will', 'would', 'shall', 'should', 'can', 'could', 'may',
    'might', 'must', 'i', 'me', 'my', 'myself', 'himself', 'herself', 'itself', 'ourselves', 'yourselves',
    'themselves', 'who', 'whom', 'which', 'what', 'whose', 'why', 'how', 'if', 'because', 'until',
    'while', 'about', 'into', 'through', 'during', 'before', 'after', 'above', 'below', 'up', 'down',
    'out', 'off', 'over', 'under', 'again', 'further', 'then', 'once', 'here', 'there', 'when', 'where',
    'all', 'any', 'both', 'each', 'few', 'more', 'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only',
    'own', 'same', 'so', 'than', 'too', 'very', 's', 't', 'just', 'now'
  ]);

  const cleaned = str.toLowerCase().replace(/[^a-z0-9\s-]/g, ' ');
  const words = cleaned.split(/\s+/).filter(w => w.length > 1 && !stopwords.has(w));

  const freq: Record<string, number> = {};
  for (const word of words) {
    freq[word] = (freq[word] || 0) + 1;
  }

  const sorted = Object.keys(freq).sort((a, b) => freq[b] - freq[a] || a.localeCompare(b));
  const limit = topN !== undefined ? topN : 5;
  return sorted.slice(0, limit);
}
