
export class Deque<T> {
  private _items: T[] = []

  addFront = (item: T): void => {
    this._items = [...this._items, item]
  }
  
  addRear = (item: T): void => {
    this._items = [item, ...this._items]
  }
  
  removeFront = (): T => {
    return this._items.pop()
  }

  removeRear = () => {
    const rear = this._items[0]
    this._items = this._items.slice(1)
    return rear
  }

  isEmpty = () => {
    return this._items.length === 0    
  }

  get size(): number {
    return this._items.length
  }

}