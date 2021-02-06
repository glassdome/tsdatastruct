import { clone, swap, bubbleSort, shuffle } from './Sort'
import { arrayShallowEquals } from '../test/helpers'

/*
 * Test that the given sort function correctly sorts in the input array.
 */
const testSortFunction = <T>(sortFunction: (list: T[]) => T[], before: T[]): boolean => {
  const after = shuffle(before)
  const sorted = sortFunction(after)
  return arrayShallowEquals(before, sorted)
}

/*
 * Test that the given sort function does not mutate the input array
 */
const testSortNoMutate = <T>(sortFunction: (list: T[]) => T[], before: T[]): boolean => {
  const after1 = shuffle(before)
  const after2 = clone(after1)
  const sorted = bubbleSort(after1)
  return arrayShallowEquals(after1, after1)
}

describe('sorting', () => {
  
  const strings = ['alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot']
  const nums = [1,2,3,4,4,5,6,7,8,9,10,11,12,13,20,40,60]

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
  
  test('bubbleSort() should sort an array', () => {
    expect( testSortFunction(bubbleSort, nums)).toBe(true)
  }),

  test('bubbleSort() should not mutate the input array', () => {
    expect(testSortNoMutate(bubbleSort, nums)).toBe(true)
  }),

  /*
   * Selection Sort
   */
  test.todo('selectionSort() should sort an array'),
  test.todo('selectionSort() should not mutate the input array')

  /*
   * Insertion Sort
   */

  /*
   * Shell Sort
   */

  /*
   * Merge Sort
   */   

  /*
   * Quick Sort
   */   
});