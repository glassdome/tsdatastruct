
export class Peekable<T> implements Iterator<string> {
  private _pointer = 0
  private _length = 0

  constructor(public data: string) {
    this._length = data.length
  }

  next = (value?: string): IteratorResult<string> => {
    if (this._pointer < this._length) {
      return { done: false, value: this.data[this._pointer++] }
    } else {
      return { done: true, value: '' }
    }
  }

  peek = (): IteratorResult<string> => {
    const value = this._pointer >= this._length 
      ? '' 
      : this.data[this._pointer]
    return { done: true, value }
  }
}

