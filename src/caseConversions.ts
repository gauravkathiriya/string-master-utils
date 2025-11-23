/**
 * Case conversion utilities for transforming strings between different naming conventions.
 * @module caseConversions
 */

/**
 * Converts a string to camelCase.
 * @param {string} str - The string to convert.
 * @returns {string} The camelCase version of the string.
 * @example
 * toCamelCase('hello world') // 'helloWorld'
 * toCamelCase('hello-world') // 'helloWorld'
 * toCamelCase('Hello World') // 'helloWorld'
 */
export function toCamelCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .split(/[\s_-]+/)
    .map((word, index) => {
      if (index === 0) {
        return word.toLowerCase();
      }
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join('');
}

/**
 * Converts a string to snake_case.
 * @param {string} str - The string to convert.
 * @returns {string} The snake_case version of the string.
 * @example
 * toSnakeCase('hello world') // 'hello_world'
 * toSnakeCase('HelloWorld') // 'hello_world'
 * toSnakeCase('hello-world') // 'hello_world'
 */
export function toSnakeCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toLowerCase();
}

/**
 * Converts a string to kebab-case.
 * @param {string} str - The string to convert.
 * @returns {string} The kebab-case version of the string.
 * @example
 * toKebabCase('hello world') // 'hello-world'
 * toKebabCase('HelloWorld') // 'hello-world'
 * toKebabCase('hello_world') // 'hello-world'
 */
export function toKebabCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();
}

/**
 * Converts a string to PascalCase.
 * @param {string} str - The string to convert.
 * @returns {string} The PascalCase version of the string.
 * @example
 * toPascalCase('hello world') // 'HelloWorld'
 * toPascalCase('hello-world') // 'HelloWorld'
 * toPascalCase('hello_world') // 'HelloWorld'
 */
export function toPascalCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .split(/[\s_-]+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join('');
}

/**
 * Converts a string to Title Case (capitalizes first letter of each word).
 * @param {string} str - The string to convert.
 * @returns {string} The Title Case version of the string.
 * @example
 * toTitleCase('hello world') // 'Hello World'
 * @example
 * toTitleCase('hello-world') // 'Hello World'
 * @example
 * toTitleCase('HELLO WORLD') // 'Hello World'
 */
export function toTitleCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .split(/\s+/)
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Converts a string to CONSTANT_CASE (UPPER_SNAKE_CASE).
 * @param {string} str - The string to convert.
 * @returns {string} The CONSTANT_CASE version of the string.
 * @example
 * toConstantCase('hello world') // 'HELLO_WORLD'
 * toConstantCase('HelloWorld') // 'HELLO_WORLD'
 * toConstantCase('hello-world') // 'HELLO_WORLD'
 */
export function toConstantCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1_$2')
    .replace(/[\s-]+/g, '_')
    .toUpperCase();
}

/**
 * Converts a string to dot.case.
 * @param {string} str - The string to convert.
 * @returns {string} The dot.case version of the string.
 * @example
 * toDotCase('hello world') // 'hello.world'
 * toDotCase('HelloWorld') // 'hello.world'
 * toDotCase('hello-world') // 'hello.world'
 */
export function toDotCase(str: string | null | undefined): string {
  if (!str || typeof str !== 'string') return '';
  
  return str
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/([a-z])([A-Z])/g, '$1.$2')
    .replace(/[\s_-]+/g, '.')
    .toLowerCase();
}

