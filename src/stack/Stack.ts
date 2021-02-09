/*
 * Simple 'stack' data structure implementations. Yep - well aware this is an
 * unecessary thing to write - just getting comfy with typescript syntax.
 */
export class Stack<T> {
  private _items: T[] = [];

  /*
   * Add item to Stack
   * returns the new Stack
   */
  push(item: T): T[] {
    this._items = [item, ...this._items];
    return this._items;
  }

  /*
   * Return the top item from the stack.
   * Mutates the stack - top item will be gone.
   */
  pop(): T {
    const top = this._items[0];
    this._items = this._items.slice(1);
    return top;
  }

  /*
   * Return top item on the stack - does not modify the stack.
   */
  peek(): T {
    return this._items[0];
  }

  /*
   * Return true if there are no items on the stack. Else false.
   */
  isEmpty(): boolean {
    return this._items.length === 0;
  }

  /*
   * Return the number of items on the stack.
   */
  get size(): number {
    return this._items.length;
  }
}
