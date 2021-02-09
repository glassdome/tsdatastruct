import { Queue } from '../src/queue/Queue';

describe('Queue', () => {
  test('.enqueue() should add an item to the back of the queue.', () => {
    const q = new Queue<string>();

    expect(q.size).toEqual(0);
    q.enqueue('foo');

    expect(q.size).toEqual(1);
  }),
    test('.dequeue() should remove an item from the front of the queue', () => {
      const q = new Queue<string>();

      q.enqueue('foo');
      q.enqueue('bar');
      q.enqueue('baz');

      expect(q.dequeue()).toEqual('foo');
      expect(q.dequeue()).toEqual('bar');
      expect(q.dequeue()).toEqual('baz');
    }),
    test('.isEmpty() should return true if here are zero items in the queue.', () => {
      const q = new Queue<number>();

      expect(q.isEmpty()).toBe(true);
      q.enqueue(1);
      expect(q.isEmpty()).toBe(false);
    }),
    test('.size should return the number of items in the queue.', () => {
      const q = new Queue<number>();
      expect(q.size).toEqual(0);

      q.enqueue(1);
      expect(q.size).toEqual(1);

      q.enqueue(2);
      expect(q.size).toEqual(2);

      q.enqueue(3);
      expect(q.size).toEqual(3);

      q.dequeue();
      expect(q.size).toEqual(2);

      q.dequeue();
      expect(q.size).toEqual(1);

      q.dequeue();
      expect(q.size).toEqual(0);
    });
});
