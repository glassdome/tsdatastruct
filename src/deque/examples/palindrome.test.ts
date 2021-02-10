import { palindromeCheck } from './palindrome';

describe('palindromeCheck()', () => {
  it('should return true for simple palindromes', () => {
    const result = palindromeCheck('radar');
    expect(result).toBe(true);
  }),
    it('should return true for palindromes without regard for capitalization', () => {
      const result = palindromeCheck('NeveroddorEven');
      expect(result).toBe(true);
    }),
    it('should return true for palindromes wiht spaces', () => {
      const result = palindromeCheck('Never odd or Even');
      expect(result).toBe(true);
    }),
    it('should return true for palindromes with punctuation', () => {
      const result = palindromeCheck("Madam, I'm Adam");
      expect(result).toBe(true);
    }),
    it('should return true for palindromes with other special characters', () => {
      const result = palindromeCheck('A man, a plan, a canal – Panama');
      expect(result).toBe(true);
    });
});
