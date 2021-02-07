import { TestWatcher } from 'jest'
import { arrayShallowEquals, clone, shuffle, swap, inRange, randomFloat, randomFloatSeq, randomNumber, randomNumberSeq, randomInt, randomIntSeq } from './helpers'

describe('helpers', () => {
  const strings = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot']
  const nums = [1,2,3,4,4,5,6,7,8,9,10,11,12,13,20,40,60]

  /*
   * Return number of decimal places in the given number.
   */
  // const numDecimalPlaces = (n: number): number => {
  //   const ns = n.toString().split('.')
  //   return ns.length < 2 ? 0 : ns[1].length
  // }
  test('clone() should make an exact copy of the given array', () => {
    const sa = clone(strings)
    expect(arrayShallowEquals(sa, strings)).toBe(true)

    const na = clone(nums)
    expect(arrayShallowEquals(na, nums)).toBe(true)
  }),

  test('swap() should exchange the array elements at the given indicies', () => {
    const a = [1, 2, 3]
    expect(a[0]).toBe(1)
    expect(a[2]).toBe(3)
    swap(a, 0, 2)
    expect(a[0]).toBe(3)
    expect(a[2]).toBe(1)
  }),

  test('shuffle() should shuffle an array', () => {
    const a = clone(nums)
    const b = shuffle(a)

    expect(arrayShallowEquals(a, b)).toBe(false)
  }),

  test('shuffle() should not mutate the input array', () => {
    const a = clone(nums)
    shuffle(a)
    expect(arrayShallowEquals(a, nums)).toBe(true)
  }),

  test('arrayShallowEquals() should return true when the given arrays are the same', () => {
    const a1 = [1, 2, 3, 4, 5]
    const b1 = [1, 2, 3, 4, 5]

    expect(arrayShallowEquals(a1, b1)).toBe(true)

    const a2 = ['foo', 'bar', 'baz', 'qux']
    const b2 = ['foo', 'bar', 'baz', 'qux']
   
    expect(arrayShallowEquals(a2, b2)).toBe(true)
  }),

  test('arrayShallowEquals() should return false when the given arrays are the same', () => {
    const a1 = [1, 2, 3, 4, 5]
    const b1 = [2, 1, 3, 4, 5]

    expect(arrayShallowEquals(a1, b1)).toBe(false)

    const a2 = ['foo', 'bar', 'baz', 'qux']
    const b2 = ['qux', 'bar', 'baz', 'foo']
   
    expect(arrayShallowEquals(a2, b2)).toBe(false)
  }),

  // Possibly redundant with above, but there's a short-circuit branch that tests for length.
  test('arrayShallowEquals() should return false when the given arrays are of different size', () => {
    const a1 = [1, 2, 3, 4, 5]
    const b1 = [1, 2, 3]

    expect(arrayShallowEquals(a1, b1)).toBe(false)
  }),

  /*
   * Number generators
   */

  test('inRange() should return true if the value of n is between min and max inclusive', () => {
    expect(inRange(50, 0, 100)).toBe(true)
    expect(inRange(0, -1, 25_000)).toBe(true)

    expect(inRange(4, -100, 0)).toBe(false)
    expect(inRange(2500, -100_000_000, 2499)).toBe(false)
  }),

  test('randomFloat() should return a random float with a value between the given min and max', () => {
    const a = randomFloat(1.2, 100.5)
    expect(inRange(a, 1, 100)).toBe(true)

    const b = randomFloat(-5000, 5000, 4)
    expect(inRange(b, -5000, 5000)).toBe(true)
  }),

  test('randomFloatSeq() should return an array with given size of random floats between min and max.', () => {
    const a = randomFloatSeq(-123, 1234, 100)
    expect(a.length).toEqual(100)
    expect(a.find(n => !inRange(n, -123, 1234))).toBeUndefined()
  }),

  test('randomInt() should return a random int with a value between the given min and max', () => {
    const a = randomInt(1, 100)
    expect(inRange(a, 1, 100)).toBe(true)
    //expect(numDecimalPlaces(a)).toEqual(0)

    const b = randomInt(-5000, 5000)
    expect(inRange(b, -5000, 5000)).toBe(true)
    //expect(numDecimalPlaces(b)).toEqual(0)
  }),

  test('randomIntSeq() should return an array with given size of random ints between min and max.', () => {
    const a = randomIntSeq(-123, 1234, 100)
    expect(a.length).toEqual(100)
    expect(a.find(n => !inRange(n, -123, 1234))).toBeUndefined()
  }),
  
  test('randomNumber() should return a random float with a value between the given min and max', () => {
    const a = randomNumber(1, 100)
    expect(inRange(a, 1, 100)).toBe(true)
    
    const b = randomNumber(-5000, 5000)
    expect(inRange(b, -5000, 5000)).toBe(true)
  }),

  test('randomNumberSeq() should return an array with given size of random floats between min and max.', () => {
    const a = randomNumberSeq(-123, 1234, 1000)
    expect(a.length).toEqual(1000)
       
    // All numbers are in range
    expect(a.find(n => !inRange(n, -123, 1234))).toBeUndefined()

    // Floats are present
    const floats = a.filter(n => n % 1 > 0)
    expect(floats.length > 0).toBe(true)

    // Ints are present
    const ints = a.filter(n => n % 1 === 0)
    expect(ints.length > 0).toBe(true)
  })
})