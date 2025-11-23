# string-master-utils

A lightweight, zero-dependency TypeScript library for comprehensive string transformations and utilities. Perfect for any project that needs robust string manipulation without external dependencies. Written in TypeScript with full type definitions included.

## Features

- 🚀 **Zero Runtime Dependencies** - No external packages required at runtime
- 📦 **Lightweight** - Minimal footprint
- 🎯 **Production Ready** - Well-tested and documented
- 📚 **Fully Documented** - Complete JSDoc for all functions
- 🔧 **Type Safe** - Written in TypeScript with full type definitions
- 💪 **TypeScript Support** - Full TypeScript support with declaration files

## Installation

```bash
npm install string-master-utils
```

## Usage
### TypeScript/ES Modules

```typescript
import {
  toCamelCase,
  toSnakeCase,
  removeSpaces,
  countWords,
  generateSlug
} from 'string-master-utils';

// Use the functions
const result = toCamelCase('hello world'); // 'helloWorld'
```

## API Reference

### Case Conversions

#### `toCamelCase(str)`

Converts a string to camelCase.

```javascript
toCamelCase('hello world')      // 'helloWorld'
toCamelCase('hello-world')      // 'helloWorld'
toCamelCase('Hello World')      // 'helloWorld'
toCamelCase('hello_world_test') // 'helloWorldTest'
```

#### `toSnakeCase(str)`

Converts a string to snake_case.

```javascript
toSnakeCase('hello world')      // 'hello_world'
toSnakeCase('HelloWorld')       // 'hello_world'
toSnakeCase('hello-world')      // 'hello_world'
toSnakeCase('Hello World Test') // 'hello_world_test'
```

#### `toKebabCase(str)`

Converts a string to kebab-case.

```javascript
toKebabCase('hello world')      // 'hello-world'
toKebabCase('HelloWorld')       // 'hello-world'
toKebabCase('hello_world')      // 'hello-world'
toKebabCase('Hello World Test') // 'hello-world-test'
```

#### `toPascalCase(str)`

Converts a string to PascalCase.

```javascript
toPascalCase('hello world')      // 'HelloWorld'
toPascalCase('hello-world')      // 'HelloWorld'
toPascalCase('hello_world')      // 'HelloWorld'
toPascalCase('hello world test') // 'HelloWorldTest'
```

#### `toTitleCase(str)`

Converts a string to Title Case (capitalizes first letter of each word).

```javascript
toTitleCase('hello world')       // 'Hello World'
toTitleCase('hello-world')       // 'Hello-World'
toTitleCase('HELLO WORLD')       // 'Hello World'
toTitleCase('hello world test')  // 'Hello World Test'
```

#### `toConstantCase(str)`

Converts a string to CONSTANT_CASE (UPPER_SNAKE_CASE).

```javascript
toConstantCase('hello world')      // 'HELLO_WORLD'
toConstantCase('HelloWorld')       // 'HELLO_WORLD'
toConstantCase('hello-world')      // 'HELLO_WORLD'
toConstantCase('hello world test') // 'HELLO_WORLD_TEST'
```

#### `toDotCase(str)`

Converts a string to dot.case.

```javascript
toDotCase('hello world')      // 'hello.world'
toDotCase('HelloWorld')       // 'hello.world'
toDotCase('hello-world')      // 'hello.world'
toDotCase('hello world test') // 'hello.world.test'
```

### Word & Character Cleaning

#### `removeSpaces(str)`

Removes all spaces from a string.

```javascript
removeSpaces('hello world')        // 'helloworld'
removeSpaces('  test  string  ')   // 'teststring'
removeSpaces('hello   world   test') // 'helloworldtest'
```

#### `removeExtraSpaces(str)`

Removes extra spaces, keeping only single spaces between words.

```javascript
removeExtraSpaces('hello    world')     // 'hello world'
removeExtraSpaces('  test   string  ')  // 'test string'
removeExtraSpaces('hello   world   test') // 'hello world test'
```

#### `removeSpecialChars(str)`

Removes all special characters from a string, keeping only alphanumeric characters and spaces.

```javascript
removeSpecialChars('hello@world#123!')  // 'helloworld123'
removeSpecialChars('test-string_123')  // 'teststring123'
removeSpecialChars('price: $99.99')    // 'price 9999'
```

#### `removeNumbers(str)`

Removes all numbers from a string.

```javascript
removeNumbers('hello123world456')  // 'helloworld'
removeNumbers('test123')           // 'test'
removeNumbers('abc123def456ghi')   // 'abcdefghi'
```

#### `keepOnlyNumbers(str)`

Keeps only numbers from a string, removing all other characters.

```javascript
keepOnlyNumbers('hello123world456')  // '123456'
keepOnlyNumbers('price: $99.99')     // '9999'
keepOnlyNumbers('phone: (555) 123-4567') // '5551234567'
```

#### `trimAll(str)`

Trims whitespace from the beginning and end of a string, and removes all internal whitespace.

```javascript
trimAll('  hello world  ')      // 'helloworld'
trimAll('  test   string  ')    // 'teststring'
trimAll('  hello   world   test  ') // 'helloworldtest'
```

#### `truncate(str, limit, suffix?)`

Truncates a string to a specified length, optionally adding an ellipsis.

```javascript
truncate('hello world', 5)           // 'hello...'
truncate('hello world', 11)          // 'hello world'
truncate('test', 10)                 // 'test'
truncate('long string here', 8, '...') // 'long st...'
truncate('short', 10, '...')         // 'short'
```

### String Info

#### `countWords(str)`

Counts the number of words in a string.

```javascript
countWords('hello world')           // 2
countWords('hello   world   test')  // 3
countWords('')                      // 0
countWords('  single  ')            // 1
```

#### `countChars(str, excludeWhitespace?)`

Counts the number of characters in a string (excluding whitespace if specified).

```javascript
countChars('hello world')           // 11
countChars('hello world', true)     // 10
countChars('test')                  // 4
countChars('  test  ', true)        // 4
```

#### `reverseString(str)`

Reverses a string.

```javascript
reverseString('hello')    // 'olleh'
reverseString('world')    // 'dlrow'
reverseString('test 123') // '321 tset'
```

#### `isEmpty(str)`

Checks if a string is empty (has no characters).

```javascript
isEmpty('')        // true
isEmpty('   ')     // false (contains whitespace)
isEmpty('hello')   // false
isEmpty(null)      // true
isEmpty(undefined) // true
```

#### `isBlank(str)`

Checks if a string is blank (empty or contains only whitespace).

```javascript
isBlank('')        // true
isBlank('   ')     // true
isBlank('\t\n')    // true
isBlank('hello')   // false
isBlank(null)      // true
isBlank(undefined) // true
```

### Advanced

#### `randomString(length, charset?)`

Generates a random string of specified length.

```javascript
randomString(10)                              // 'aB3dEfG9hI' (random)
randomString(5, '0123456789')                // '38472' (random)
randomString(8, 'abc')                       // 'abcabcaa' (random)
randomString(6, 'ABCDEFGHIJKLMNOPQRSTUVWXYZ') // 'XYZABC' (random)
```

#### `generateSlug(str)`

Generates a URL-friendly slug from a string.

```javascript
generateSlug('Hello World!')              // 'hello-world'
generateSlug('This is a Test String')     // 'this-is-a-test-string'
generateSlug('JavaScript & TypeScript')    // 'javascript-typescript'
generateSlug('  Multiple   Spaces  ')     // 'multiple-spaces'
generateSlug('Special@Chars#Here!')        // 'specialcharshere'
```

#### `compareStrings(a, b, caseSensitive?)`

Compares two strings and returns a comparison result.

```javascript
compareStrings('apple', 'banana')          // -1 (a < b)
compareStrings('banana', 'apple')          // 1 (a > b)
compareStrings('hello', 'hello')           // 0 (a === b)
compareStrings('Hello', 'hello', true)      // 1 (case-sensitive)
compareStrings('Hello', 'hello', false)    // 0 (case-insensitive)
```

#### `normalizeUnicode(str)`

Normalizes Unicode characters in a string (e.g., removes diacritics).

```javascript
normalizeUnicode('café')      // 'cafe'
normalizeUnicode('naïve')     // 'naive'
normalizeUnicode('résumé')    // 'resume'
normalizeUnicode('Zürich')    // 'Zurich'
normalizeUnicode('São Paulo') // 'Sao Paulo'
```

## Complete Example

### JavaScript

```javascript
const strUtils = require('string-master-utils');
```

### TypeScript

```typescript
import * as strUtils from 'string-master-utils';
```

// Case conversions
const camel = strUtils.toCamelCase('hello world');        // 'helloWorld'
const snake = strUtils.toSnakeCase('Hello World');        // 'hello_world'
const kebab = strUtils.toKebabCase('Hello World');        // 'hello-world'
const pascal = strUtils.toPascalCase('hello world');      // 'HelloWorld'

// Cleaning
const cleaned = strUtils.removeExtraSpaces('hello    world'); // 'hello world'
const noSpecial = strUtils.removeSpecialChars('test@123!');    // 'test123'
const truncated = strUtils.truncate('long string', 8);         // 'long st...'

// String info
const wordCount = strUtils.countWords('hello world test');     // 3
const charCount = strUtils.countChars('hello world', true);    // 10
const reversed = strUtils.reverseString('hello');              // 'olleh'

// Advanced
const slug = strUtils.generateSlug('Hello World!');           // 'hello-world'
const random = strUtils.randomString(10);                      // 'aB3dEfG9hI'
const normalized = strUtils.normalizeUnicode('café');          // 'cafe'
```

## Development

### Building

The project is written in TypeScript. To build:

```bash
npm run build
```

This compiles TypeScript to JavaScript in the `dist/` directory.

### Testing

Run the test suite:

```bash
npm test
```

This will compile TypeScript and run all tests.

## License

MIT

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Publishing to NPM

### Steps to Publish

1. **Ensure you have an NPM account**
   ```bash
   npm login
   ```

2. **Update version in package.json** (if needed)
   ```bash
   npm version patch  # for bug fixes
   npm version minor  # for new features
   npm version major  # for breaking changes
   ```

3. **Run tests**
   ```bash
   npm test
   ```

4. **Publish to NPM**
   ```bash
   npm publish
   ```

5. **Verify publication**
   - Check your package on npmjs.com
   - Test installation: `npm install string-master-utils`

### Pre-publish Checklist

- ✅ All tests pass
- ✅ README.md is complete and accurate
- ✅ package.json has correct name, version, and metadata
- ✅ All functions are properly documented with JSDoc
- ✅ No sensitive information in the package
- ✅ .npmignore is configured correctly

## Support

For issues, questions, or contributions, please open an issue on the GitHub repository.
