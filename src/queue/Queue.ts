
export class Queue<T> {

  private _items: T[] = []

  /*
   * Insert items at front of queue
   */
  enqueue = (item: T) => {
    this._items = [item, ...this._items]
  }

  /*
   * Remove item from end of queue
   */
  dequeue = (): T | undefined => {
    return this._items.pop();
  }

  isEmpty = (): boolean => {
    return this._items.length === 0
  }

  get size(): number {
    return this._items.length
  }  
}