import { TestWatcher } from 'jest'
import { arrayShallowEquals } from './helpers'

describe('helpers', () => {

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
  })
})