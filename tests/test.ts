/**
 * Test suite for string-master-utils
 * Run with: npm test
 */

import * as strUtils from '../index';

// Test utilities
let testsPassed = 0;
let testsFailed = 0;

function test(name: string, fn: () => void): void {
  try {
    fn();
    testsPassed++;
    console.log(`✅ ${name}`);
  } catch (error) {
    testsFailed++;
    console.error(`❌ ${name}`);
    console.error(`   Error: ${(error as Error).message}`);
  }
}

function assert(condition: boolean, message?: string): void {
  if (!condition) {
    throw new Error(message || 'Assertion failed');
  }
}

function assertEqual<T>(actual: T, expected: T, message?: string): void {
  if (actual !== expected) {
    throw new Error(message || `Expected ${expected}, got ${actual}`);
  }
}

console.log('🧪 Running tests for string-master-utils...\n');

// Case Conversions Tests
console.log('📝 Case Conversions Tests:');
test('toCamelCase - basic', () => {
  assertEqual(strUtils.toCamelCase('hello world'), 'helloWorld');
  assertEqual(strUtils.toCamelCase('hello-world'), 'helloWorld');
  assertEqual(strUtils.toCamelCase('Hello World'), 'helloWorld');
});

test('toSnakeCase - basic', () => {
  assertEqual(strUtils.toSnakeCase('hello world'), 'hello_world');
  assertEqual(strUtils.toSnakeCase('HelloWorld'), 'hello_world');
  assertEqual(strUtils.toSnakeCase('hello-world'), 'hello_world');
});

test('toKebabCase - basic', () => {
  assertEqual(strUtils.toKebabCase('hello world'), 'hello-world');
  assertEqual(strUtils.toKebabCase('HelloWorld'), 'hello-world');
  assertEqual(strUtils.toKebabCase('hello_world'), 'hello-world');
});

test('toPascalCase - basic', () => {
  assertEqual(strUtils.toPascalCase('hello world'), 'HelloWorld');
  assertEqual(strUtils.toPascalCase('hello-world'), 'HelloWorld');
  assertEqual(strUtils.toPascalCase('hello_world'), 'HelloWorld');
});

test('toTitleCase - basic', () => {
  assertEqual(strUtils.toTitleCase('hello world'), 'Hello World');
  assertEqual(strUtils.toTitleCase('HELLO WORLD'), 'Hello World');
  assertEqual(strUtils.toTitleCase('hello-world'), 'Hello-world');
});

test('toConstantCase - basic', () => {
  assertEqual(strUtils.toConstantCase('hello world'), 'HELLO_WORLD');
  assertEqual(strUtils.toConstantCase('HelloWorld'), 'HELLO_WORLD');
  assertEqual(strUtils.toConstantCase('hello-world'), 'HELLO_WORLD');
});

test('toDotCase - basic', () => {
  assertEqual(strUtils.toDotCase('hello world'), 'hello.world');
  assertEqual(strUtils.toDotCase('HelloWorld'), 'hello.world');
  assertEqual(strUtils.toDotCase('hello-world'), 'hello.world');
});

// Cleaning Tests
console.log('\n🧹 Cleaning Tests:');
test('removeSpaces - basic', () => {
  assertEqual(strUtils.removeSpaces('hello world'), 'helloworld');
  assertEqual(strUtils.removeSpaces('  test  string  '), 'teststring');
});

test('removeExtraSpaces - basic', () => {
  assertEqual(strUtils.removeExtraSpaces('hello    world'), 'hello world');
  assertEqual(strUtils.removeExtraSpaces('  test   string  '), 'test string');
});

test('removeSpecialChars - basic', () => {
  assertEqual(strUtils.removeSpecialChars('hello@world#123!'), 'helloworld123');
  assertEqual(strUtils.removeSpecialChars('test-string_123'), 'teststring123');
});

test('removeNumbers - basic', () => {
  assertEqual(strUtils.removeNumbers('hello123world456'), 'helloworld');
  assertEqual(strUtils.removeNumbers('test123'), 'test');
});

test('keepOnlyNumbers - basic', () => {
  assertEqual(strUtils.keepOnlyNumbers('hello123world456'), '123456');
  assertEqual(strUtils.keepOnlyNumbers('price: $99.99'), '9999');
});

test('trimAll - basic', () => {
  assertEqual(strUtils.trimAll('  hello world  '), 'helloworld');
  assertEqual(strUtils.trimAll('  test   string  '), 'teststring');
});

test('truncate - basic', () => {
  assertEqual(strUtils.truncate('hello world', 5), 'hello...');
  assertEqual(strUtils.truncate('hello world', 11), 'hello world');
  assertEqual(strUtils.truncate('test', 10), 'test');
});

// String Info Tests
console.log('\n📊 String Info Tests:');
test('countWords - basic', () => {
  assertEqual(strUtils.countWords('hello world'), 2);
  assertEqual(strUtils.countWords('hello   world   test'), 3);
  assertEqual(strUtils.countWords(''), 0);
});

test('countChars - basic', () => {
  assertEqual(strUtils.countChars('hello world'), 11);
  assertEqual(strUtils.countChars('hello world', true), 10);
  assertEqual(strUtils.countChars('test'), 4);
});

test('reverseString - basic', () => {
  assertEqual(strUtils.reverseString('hello'), 'olleh');
  assertEqual(strUtils.reverseString('world'), 'dlrow');
});

test('isEmpty - basic', () => {
  assert(strUtils.isEmpty('') === true);
  assert(strUtils.isEmpty('   ') === false);
  assert(strUtils.isEmpty('hello') === false);
  assert(strUtils.isEmpty(null) === true);
  assert(strUtils.isEmpty(undefined) === true);
});

test('isBlank - basic', () => {
  assert(strUtils.isBlank('') === true);
  assert(strUtils.isBlank('   ') === true);
  assert(strUtils.isBlank('\t\n') === true);
  assert(strUtils.isBlank('hello') === false);
  assert(strUtils.isBlank(null) === true);
  assert(strUtils.isBlank(undefined) === true);
});

// Advanced Tests
console.log('\n🚀 Advanced Tests:');
test('randomString - basic', () => {
  const result = strUtils.randomString(10);
  assertEqual(result.length, 10);
  assert(typeof result === 'string');
});

test('randomString - custom charset', () => {
  const result = strUtils.randomString(5, '0123456789');
  assertEqual(result.length, 5);
  assert(/^\d+$/.test(result));
});

test('generateSlug - basic', () => {
  assertEqual(strUtils.generateSlug('Hello World!'), 'hello-world');
  assertEqual(strUtils.generateSlug('This is a Test String'), 'this-is-a-test-string');
  assertEqual(strUtils.generateSlug('JavaScript & TypeScript'), 'javascript-typescript');
});

test('compareStrings - basic', () => {
  assert(strUtils.compareStrings('apple', 'banana') === -1);
  assert(strUtils.compareStrings('banana', 'apple') === 1);
  assert(strUtils.compareStrings('hello', 'hello') === 0);
  assert(strUtils.compareStrings('Hello', 'hello', true) === -1); // 'H' < 'h' in ASCII
  assert(strUtils.compareStrings('hello', 'Hello', true) === 1); // 'h' > 'H' in ASCII
  assert(strUtils.compareStrings('Hello', 'hello', false) === 0);
});

test('normalizeUnicode - basic', () => {
  assertEqual(strUtils.normalizeUnicode('café'), 'cafe');
  assertEqual(strUtils.normalizeUnicode('naïve'), 'naive');
  assertEqual(strUtils.normalizeUnicode('résumé'), 'resume');
});

// Edge Cases Tests
console.log('\n🔍 Edge Cases Tests:');
test('Edge case - null/undefined inputs', () => {
  assertEqual(strUtils.toCamelCase(null), '');
  assertEqual(strUtils.toCamelCase(undefined), '');
  assertEqual(strUtils.removeSpaces(null), '');
  assertEqual(strUtils.countWords(null), 0);
});

test('Edge case - empty strings', () => {
  assertEqual(strUtils.toCamelCase(''), '');
  assertEqual(strUtils.removeSpaces(''), '');
  assertEqual(strUtils.countWords(''), 0);
  assert(strUtils.isEmpty('') === true);
  assert(strUtils.isBlank('') === true);
});

test('Edge case - whitespace only', () => {
  assert(strUtils.isBlank('   ') === true);
  assert(strUtils.isEmpty('   ') === false);
  assertEqual(strUtils.removeSpaces('   '), '');
});

// Summary
console.log('\n' + '='.repeat(50));
console.log(`📈 Test Summary:`);
console.log(`   ✅ Passed: ${testsPassed}`);
console.log(`   ❌ Failed: ${testsFailed}`);
console.log(`   📊 Total:  ${testsPassed + testsFailed}`);
console.log('='.repeat(50));

if (testsFailed === 0) {
  console.log('\n🎉 All tests passed!');
  process.exit(0);
} else {
  console.log('\n⚠️  Some tests failed. Please review the errors above.');
  process.exit(1);
}

