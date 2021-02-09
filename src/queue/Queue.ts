export class Queue<T> {
  private items: T[] = [];

  /*
   * Insert items at front of queue
   */
  enqueue = (item: T): void => {
    this.items = [item, ...this.items];
  };

  /*
   * Remove item from end of queue
   */
  dequeue = (): T | undefined => {
    return this.items.pop();
  };

  isEmpty = (): boolean => {
    return this.items.length === 0;
  };

  get size(): number {
    return this.items.length;
  }
}
