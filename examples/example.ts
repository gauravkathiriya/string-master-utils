/**
 * Example usage of string-master-utils
 * Run with: npm run build && node dist/examples/example.js
 * Or compile with: tsc examples/example.ts && node examples/example.js
 */

import * as strUtils from '../index';

console.log('🚀 string-master-utils Examples\n');
console.log('='.repeat(60));

// Case Conversions
console.log('\n📝 Case Conversions:');
console.log('toCamelCase("hello world"):', strUtils.toCamelCase('hello world'));
console.log('toSnakeCase("Hello World"):', strUtils.toSnakeCase('Hello World'));
console.log('toKebabCase("Hello World"):', strUtils.toKebabCase('Hello World'));
console.log('toPascalCase("hello world"):', strUtils.toPascalCase('hello world'));
console.log('toTitleCase("hello world"):', strUtils.toTitleCase('hello world'));
console.log('toConstantCase("hello world"):', strUtils.toConstantCase('hello world'));
console.log('toDotCase("hello world"):', strUtils.toDotCase('hello world'));

// Cleaning
console.log('\n🧹 Cleaning:');
console.log('removeSpaces("hello world"):', strUtils.removeSpaces('hello world'));
console.log('removeExtraSpaces("hello    world"):', strUtils.removeExtraSpaces('hello    world'));
console.log('removeSpecialChars("test@123!"):', strUtils.removeSpecialChars('test@123!'));
console.log('removeNumbers("hello123world"):', strUtils.removeNumbers('hello123world'));
console.log('keepOnlyNumbers("price: $99.99"):', strUtils.keepOnlyNumbers('price: $99.99'));
console.log('trimAll("  hello world  "):', strUtils.trimAll('  hello world  '));
console.log('truncate("long string here", 8):', strUtils.truncate('long string here', 8));

// String Info
console.log('\n📊 String Info:');
console.log('countWords("hello world test"):', strUtils.countWords('hello world test'));
console.log('countChars("hello world", true):', strUtils.countChars('hello world', true));
console.log('reverseString("hello"):', strUtils.reverseString('hello'));
console.log('isEmpty(""):', strUtils.isEmpty(''));
console.log('isBlank("   "):', strUtils.isBlank('   '));

// Advanced
console.log('\n🚀 Advanced:');
console.log('randomString(10):', strUtils.randomString(10));
console.log('generateSlug("Hello World!"):', strUtils.generateSlug('Hello World!'));
console.log('compareStrings("apple", "banana"):', strUtils.compareStrings('apple', 'banana'));
console.log('normalizeUnicode("café"):', strUtils.normalizeUnicode('café'));

console.log('\n' + '='.repeat(60));
console.log('✅ All examples executed successfully!');

