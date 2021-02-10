import { Peekable, Tokenizer } from './tokenizer';

describe('Peekable', () => {
  /*
   * Peekable::next()
   */
  test('Peekable.next() should return done == true when constructed with empty string', () => {
    const p = new Peekable('');
    const { done } = p.next();

    expect(done).toBe(true);
  }),
    test('Peekable.next() should return characters in order', () => {
      const p = new Peekable('foo bar');

      expect(p.next().value).toEqual('f');
      expect(p.next().value).toEqual('o');
      expect(p.next().value).toEqual('o');
      expect(p.next().value).toEqual(' ');
      expect(p.next().value).toEqual('b');
      expect(p.next().value).toEqual('a');
      expect(p.next().value).toEqual('r');
    }),
    test('Peekable.next() should handle repeated calls when done == true', () => {
      const p = new Peekable('foo');

      p.next();
      p.next();
      p.next();

      expect(p.next().done).toBe(true);
      expect(p.next().done).toBe(true);
      expect(p.next().done).toBe(true);
      expect(p.next().done).toBe(true);
      expect(p.next().done).toBe(true);
      expect(p.next().done).toBe(true);
    });

  /*
   * Peekable::peek()
   */
  test('Peekable.peek() should return the next character without consuming it', () => {
    const p = new Peekable('abc');

    expect(p.peek().value).toEqual('a');
    expect(p.next().value).toEqual('a');

    expect(p.peek().value).toEqual('b');
    expect(p.next().value).toEqual('b');

    expect(p.peek().value).toEqual('c');
    expect(p.next().value).toEqual('c');
  }),
    test('Peekable.peek() should return an empty string and done == true when iterator is at last char', () => {
      const p = new Peekable('abcde');

      p.next();
      p.next();
      p.next();
      p.next();

      const { done, value } = p.next();
      expect(value).toEqual('e');
      expect(done).toBe(false);

      const { done: pd, value: pv } = p.peek();
      expect(pv).toEqual('');
      expect(pd).toBe(true);
    }),
    test('Peekable.peek() should return a value and done == false when iterator is not at last char', () => {
      const p = new Peekable('abcde');

      expect(p.peek()).toMatchObject({ value: 'a', done: false });

      p.next();
      expect(p.peek()).toMatchObject({ value: 'b', done: false });

      p.next();
      expect(p.peek()).toMatchObject({ value: 'c', done: false });

      p.next();
      expect(p.peek()).toMatchObject({ value: 'd', done: false });
    });
});

describe('Tokenizer', () => {
  test('.parseNumber() should handle integers of one digit', () => {
    const p = new Peekable('');
    const t = new Tokenizer('');

    const result = t.parseNumber('1', p);
    expect(result).toEqual(1);
  }),
    test('.parseNumber() should handle integers arbitrary digit length', () => {
      const p = new Peekable('234567890');
      const t = new Tokenizer('');

      const result = t.parseNumber('1', p);
      expect(result).toEqual(1234567890);
    }),
    test('.parseNumber() should handle floating-point numbers of arbitrary digit length', () => {
      const t = new Tokenizer('');

      const p1 = new Peekable('.1');
      const r1 = t.parseNumber('3', p1);
      expect(r1).toEqual(3.1);

      const p2 = new Peekable('1.14');
      const r2 = t.parseNumber('3', p2);
      expect(r2).toEqual(31.14);

      const p3 = new Peekable('14.1416');
      const r3 = t.parseNumber('3', p3);
      expect(r3).toEqual(314.1416);
    }),
    test('.parse() should handle a single numeric input', () => {
      /* INTEGER */
      const t1 = new Tokenizer('1');
      const r1 = t1.parse();

      expect(r1.length).toEqual(1);
      expect(r1[0]).toEqual('1');

      /* FLOAT */
      const t2 = new Tokenizer('3.14');
      const r2 = t2.parse();

      expect(r2.length).toEqual(1);
      expect(r2[0]).toEqual('3.14');
    }),
    test('.parse() should return an array of tokens from the input', () => {
      const t1 = new Tokenizer('(1)');
      const r1 = t1.parse();

      expect(r1.length).toEqual(3);
      expect(r1[0]).toEqual('(');
      expect(r1[1]).toEqual('1');
      expect(r1[2]).toEqual(')');

      const t2 = new Tokenizer('(3 + (4 * 5))');
      const r2 = t2.parse();

      expect(r2.length).toEqual(9);
      expect(r2[0]).toEqual('(');
      expect(r2[1]).toEqual('3');
      expect(r2[2]).toEqual('+');
      expect(r2[3]).toEqual('(');
      expect(r2[4]).toEqual('4');
      expect(r2[5]).toEqual('*');
      expect(r2[6]).toEqual('5');
      expect(r2[7]).toEqual(')');
      expect(r2[8]).toEqual(')');
    });
});
