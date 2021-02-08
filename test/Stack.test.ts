import { Stack } from '../src/stack/Stack';

describe('Stack', () => {

  test('.push() should add an item to the stack.', () => {
    const s = new Stack();

    expect(s.size).toEqual(0)
    s.push(1)
    
    expect(s.size).toEqual(1)
  }),

  test('.pop() should remove an item from the stack.', () => {
    const s = new Stack();
    expect(s.size).toEqual(0)
    s.push(1)
    const t = s.pop();
    
    expect(t).toEqual(1)
  }),  

  test('.peek() should return top item without removing', () => {
    const s = new Stack<number>()
    s.push(123)
    s.push(456) 
    s.push(789)

    expect(s.size).toEqual(3)
    
    const x = s.peek()
    expect(x).toEqual(789)
    expect(s.size).toEqual(3)
  }),
  
  /*
   * .size
   */
  test('.size should return 1 when stack size is 1.', () => {
    const st = new Stack<number>()
    st.push(1);

    expect(st.size).toEqual(1);
  }),
  test('.size should return correct number of items on the stack.', () => {
    const st = new Stack<number>()
    st.push(1);
    st.push(2);
    st.push(3);

    expect(st.size).toEqual(3);
  }),


  test('.isEmpty()', () => {

  })

});