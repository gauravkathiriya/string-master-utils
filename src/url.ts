/**
 * URL parsing and manipulation utilities.
 * @module url
 */

/**
 * Extracts the domain (hostname) from a given URL string.
 * @param {string | null | undefined} url - The URL to parse.
 * @returns {string} The hostname of the URL, or empty string if invalid.
 * @example
 * getDomain('https://sub.example.com/path?query=1') // 'sub.example.com'
 * getDomain('example.com') // 'example.com'
 */
export function getDomain(url: string | null | undefined): string {
  if (typeof url !== 'string') return '';
  try {
    let cleanUrl = url.trim();
    if (!/^[a-zA-Z]+:\/\//.test(cleanUrl)) {
      cleanUrl = 'http://' + cleanUrl;
    }
    const parsed = new URL(cleanUrl);
    return parsed.hostname;
  } catch {
    return '';
  }
}

/**
 * Extracts the subdomain from a given URL string, respecting common multi-part TLDs (e.g. .co.uk).
 * @param {string | null | undefined} url - The URL to parse.
 * @returns {string} The subdomain, or empty string if none exists.
 * @example
 * getSubdomain('https://sub.example.com') // 'sub'
 * getSubdomain('https://example.co.uk') // ''
 * getSubdomain('https://dev.sub.example.com') // 'dev.sub'
 */
export function getSubdomain(url: string | null | undefined): string {
  const domain = getDomain(url);
  if (!domain || /^[0-9.]+$/.test(domain)) return ''; // IP address or empty

  const parts = domain.split('.');
  if (parts.length <= 2) return '';

  // Common second-level TLDs to avoid misidentifying as a subdomain (e.g. 'co' in example.co.uk)
  const secondLevelTLDs = new Set([
    'co', 'com', 'org', 'net', 'gov', 'edu', 'ac', 'mil', 'or'
  ]);

  const last = parts[parts.length - 1];
  const secondLast = parts[parts.length - 2];

  const isSecondLevel = secondLevelTLDs.has(secondLast) && last.length === 2;
  const domainPartsCount = isSecondLevel ? 3 : 2;

  if (parts.length > domainPartsCount) {
    return parts.slice(0, parts.length - domainPartsCount).join('.');
  }

  return '';
}

/**
 * Removes designated query parameters from a URL. Removes all parameters if no params array is specified.
 * @param {string | null | undefined} url - The URL string.
 * @param {string[]} [params] - The array of parameter keys to remove.
 * @returns {string} The updated URL.
 * @example
 * removeQueryParams('https://example.com?a=1&b=2', ['a']) // 'https://example.com?b=2'
 * removeQueryParams('https://example.com?a=1&b=2') // 'https://example.com'
 */
export function removeQueryParams(url: string | null | undefined, params?: string[]): string {
  if (typeof url !== 'string') return '';

  const parts = url.split('?');
  if (parts.length < 2) return url;

  const baseUrl = parts[0];
  const queryString = parts[1];

  if (!params || !Array.isArray(params)) {
    return baseUrl;
  }

  const searchParams = new URLSearchParams(queryString);
  for (const param of params) {
    searchParams.delete(param);
  }

  const newQuery = searchParams.toString();
  return newQuery ? `${baseUrl}?${newQuery}` : baseUrl;
}

/**
 * Appends query parameters to a given URL. Updates the parameter value if it already exists.
 * @param {string | null | undefined} url - The URL string.
 * @param {Record<string, string>} params - Key-value pairs of parameters to add.
 * @returns {string} The updated URL.
 * @example
 * addQueryParams('https://example.com', { ref: 'partner', locale: 'en' }) // 'https://example.com?ref=partner&locale=en'
 */
export function addQueryParams(url: string | null | undefined, params: Record<string, string>): string {
  if (typeof url !== 'string') return '';
  if (!params || typeof params !== 'object') return url;

  const parts = url.split('?');
  const baseUrl = parts[0];
  const queryString = parts[1] || '';

  const searchParams = new URLSearchParams(queryString);
  for (const [key, value] of Object.entries(params)) {
    searchParams.set(key, value);
  }

  const newQuery = searchParams.toString();
  return newQuery ? `${baseUrl}?${newQuery}` : baseUrl;
}

/**
 * Parses a URL and returns all query parameters as a key-value record object.
 * @param {string | null | undefined} url - The URL string.
 * @returns {Record<string, string>} A record containing the parameters.
 * @example
 * getQueryParams('https://example.com?name=john&age=30') // { name: 'john', age: '30' }
 */
export function getQueryParams(url: string | null | undefined): Record<string, string> {
  if (typeof url !== 'string') return {};

  const parts = url.split('?');
  if (parts.length < 2) return {};

  const searchParams = new URLSearchParams(parts[1]);
  const result: Record<string, string> = {};
  searchParams.forEach((value, key) => {
    result[key] = value;
  });

  return result;
}

/**
 * Checks if a URL is secure (starts with https:// or ftps://).
 * @param {string | null | undefined} url - The URL string.
 * @returns {boolean} True if the URL is secure, false otherwise.
 * @example
 * isSecureUrl('https://example.com') // true
 * isSecureUrl('http://example.com') // false
 */
export function isSecureUrl(url: string | null | undefined): boolean {
  if (typeof url !== 'string') return false;
  return /^https:\/\/|^ftps:\/\//i.test(url.trim());
}
