import { validParens } from './parenchecker';

describe('validParens()', () => {
  it('should return true if the string is empty', () => {
    const result = validParens('');
    expect(result).toBe(true);
  }),
    it('should return true if open & close parentheses match', () => {
      const result = validParens('({(<>)})');
      expect(result).toBe(true);
    }),
    it('should return false if open & close parantheses do not match', () => {
      const result = validParens('<{((()))}>}');
      expect(result).toBe(false);
    });
});
