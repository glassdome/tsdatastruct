import { Deque } from '../src/deque/Deque';

describe('Deque', () => {
  test('.addFront() should add an item to the front of the Deque', () => {
    const d = new Deque<string>();
    d.addFront('f-1');
    d.addFront('f-2');

    expect(d.size).toEqual(2);
    expect(d.removeFront()).toEqual('f-2');
  }),
    test('.addRear() should add an item to the reare of the Deque', () => {
      const d = new Deque<string>();
      d.addRear('f-1');
      d.addRear('f-2');

      expect(d.size).toEqual(2);
      expect(d.removeRear()).toEqual('f-2');
    }),
    test('.removeFront() should remove an item at the front of the Deque', () => {
      const d = new Deque<string>();
      d.addFront('f-1');
      d.addFront('f-2');
      expect(d.removeFront()).toEqual('f-2');
      expect(d.size).toEqual(1);
    }),
    test('.removeRear() should remove an item at the rear of the Deque', () => {
      const d = new Deque<string>();
      d.addFront('f-1');
      d.addFront('f-2');
      expect(d.removeRear()).toEqual('f-1');
      expect(d.size).toEqual(1);
    }),
    test('.isEmpty() should return true when the Deque is empty, otherwise, it should return false', () => {
      const d = new Deque<string>();
      expect(d.isEmpty()).toEqual(true);
      d.addFront('f-1');
      expect(d.isEmpty()).toEqual(false);
      d.addFront('f-2');
      expect(d.isEmpty()).toEqual(false);
      d.removeFront();
      expect(d.isEmpty()).toEqual(false);
      d.removeRear();
      expect(d.isEmpty()).toEqual(true);
    });

  test('.size should show the size of the Deque', () => {
    const d = new Deque<string>();
    expect(d.size).toEqual(0);
    d.addFront('f-1');
    expect(d.size).toEqual(1);
    d.addFront('f-2');
    expect(d.size).toEqual(2);
    d.removeFront();
    expect(d.size).toEqual(1);
    d.removeRear();
    expect(d.size).toEqual(0);
  });
});
