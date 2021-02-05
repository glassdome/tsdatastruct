import { add } from '../index'

describe('The add function', () => {  
  it('should return the sum of two numbers', () => {
    expect(add(2, 2)).toEqual(4)
  }),

  it('should never return a string', () => {
    const result = add(2, 2)
    expect(typeof result === 'string').toBeFalsy()
  });

});
