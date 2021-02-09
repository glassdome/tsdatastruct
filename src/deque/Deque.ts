export class Deque<T> {
  private items: T[] = [];

  addFront = (item: T): void => {
    this.items = [...this.items, item];
  };

  addRear = (item: T): void => {
    this.items = [item, ...this.items];
  };

  removeFront = (): T | undefined => {
    return this.items.pop();
  };

  removeRear = (): T | undefined => {
    const rear = this.items[0];
    this.items = this.items.slice(1);
    return rear;
  };

  isEmpty = (): boolean => {
    return this.items.length === 0;
  };

  get size(): number {
    return this.items.length;
  }
}
