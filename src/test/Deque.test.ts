import { Deque } from '../deque/Deque'

describe('Deque', () => {

  test('.addFront() should add an item to the front of the Deque', () => {
    const d = new Deque<string>()
    d.addFront('f-1')
    d.addFront('f-2')

    expect(d.size).toEqual(2)
    expect(d.removeFront()).toEqual('f-2')
  }),

  test('.addRear() should add an item to the reare of the Deque', () => {
    const d = new Deque<string>()
    d.addRear('f-1')
    d.addRear('f-2')

    expect(d.size).toEqual(2)
    expect(d.removeRear()).toEqual('f-2')    
  }),

  test.todo('.removeFront()'),

  test.todo('.removeRear()'),
  
  test.todo('.isEmpty()'),
  
  test.todo('.size')

});