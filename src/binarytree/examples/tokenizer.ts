/**
 * A peekable string iterator. Allows you to look ahead one character
 * without consuming that character.
 */
export class Peekable implements Iterator<string> {
  private _pointer = 0;
  private _length = 0;

  constructor(public data: string) {
    this._length = data.length;
  }

  /*
   * Advance pointer to next character in the string.
   */
  next = (): IteratorResult<string> => {
    if (this._pointer < this._length) {
      return { done: false, value: this.data[this._pointer++] };
    } else {
      return { done: true, value: '' };
    }
  };

  /*
   * Look ahead one charactter in the string withoutt advancing
   * the pointer. Like a preview of what `.next()` will return
   * the next time it is called.
   */
  peek = (): IteratorResult<string> => {
    return this._pointer >= this._length
      ? { done: true, value: '' }
      : { done: false, value: this.data[this._pointer] };
  };
}

/*
 * The way this code is used in the simpleparser example, it doesn't make much
 * sense to have a class. Should really just be functions. There's more coming...
 * it'll make sense soon...
 */
export class Tokenizer {
  constructor(public expr: string) {}

  private _data = new Peekable(this.expr.replace(/\s+/g, ''));

  /*
   * Parse an arithmetic expression into an array of string tokens.
   */
  parse = (): string[] => {
    let current = this._data.next();
    //const next = current.value;
    const acc = [];

    while (!current.done) {
      if (this.isNumber(current.value)) {
        acc.push(this.parseNumber(current.value).toString());
      } else {
        acc.push(current.value);
      }
      current = this._data.next();
    }
    return acc;
  };

  /*
   * Extract a numeric value from a Peekable (int or float)
   */
  parseNumber = (num: string, data: Peekable = this._data): number => {
    const acc = [];
    acc.push(num);

    while (true) {
      const nextChar = data.peek().value;
      if (this.isNumber(nextChar) || nextChar === '.') {
        acc.push(data.next().value);
      } else {
        break;
      }
    }
    return Number(acc.join(''));
  };

  /*
   * Determine if the given string can be interpreted
   * as a number (int or float)
   */
  isNumber = (c: string): boolean => {
    if (c.trim().length === 0 || c === null) {
      return false;
    }
    return !isNaN(+c.trim());
  };
}
