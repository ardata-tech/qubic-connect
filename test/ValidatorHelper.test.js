import {
  assertInput,
  assertAllStrings,
  assertIsArray,
  assertIsString,
  assertIsBoolean,
  assertIsInt,
  assertConfirmation
} from '../src/ValidatorHelper';

describe('ValidatorHelper Functions', () => {
  test('assertInput throws error on falsy input', () => {
    expect(() => assertInput(null)).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertAllStrings throws error if not all elements are strings', () => {
    expect(() => assertAllStrings(['string', 123])).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertIsArray throws error if input is not an array', () => {
    expect(() => assertIsArray('not an array')).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertIsString throws error if input is not a string', () => {
    expect(() => assertIsString(123)).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertIsBoolean throws error if input is not a boolean', () => {
    expect(() => assertIsBoolean('not a boolean')).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertIsInt throws error if input is not an integer', () => {
    expect(() => assertIsInt(1.23)).toThrow({ code: -32000, message: 'Invalid input.' });
  });

  test('assertConfirmation throws error if not confirmed', () => {
    expect(() => assertConfirmation(false)).toThrow({ code: 4001, message: 'User rejected the request.' });
  });
});
