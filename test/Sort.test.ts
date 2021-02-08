import { swap, bubbleSort, selectionSort, insertionSort } from '../src/sorting/Sort'
import { arrayShallowEquals, clone, shuffle } from './helpers/helpers'


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
  const sorted = sortFunction(after1)
  return arrayShallowEquals(after1, after1)
}

describe('sorting', () => {
  
  const strings = [
    'alpha', 'bravo', 'charlie', 'delta', 'echo', 'foxtrot',
    'golf', 'hotel', 'india', 'juliet', 'kilo', 'lima', 'mike',
    'november', 'oscar', 'papa', 'quebec', 'romeo', 'sierra',
    'tango', 'uniform', 'victor', 'whiskey', 'xray', 'yankee',
    'zulu'
  ]
  const nums = [
    1,2,3,4,4,5,6,7,8,9,10,
    10,15,20,25,30,35,40,45,50,55,
    60,70,80,90,100,110,120,130,140,150]

  test('bubbleSort() should sort an array', () => {
    expect( testSortFunction(bubbleSort, nums)).toBe(true)
  }),

  test('bubbleSort() should not mutate the input array', () => {
    expect(testSortNoMutate(bubbleSort, nums)).toBe(true)
  }),

  /*
   * Selection Sort
   */
  test('selectionSort() should sort an array', () => {
    expect(testSortFunction(selectionSort, nums)).toBe(true)
    expect(testSortFunction(selectionSort, strings)).toBe(true)
   }),

  test('selectionSort() should not mutate the input array', () => {
    expect(testSortNoMutate(selectionSort, nums)).toBe(true)
    expect(testSortNoMutate(selectionSort, strings)).toBe(true)
  })

  /*
   * Insertion Sort
   */

   test('insertionSort() should sort an array', () => {
    expect(testSortFunction(insertionSort, nums)).toBe(true)
    expect(testSortFunction(insertionSort, strings)).toBe(true)
   }),

   test('insertionSort() should not mutate the input array', () => {
    expect(testSortNoMutate(insertionSort, nums)).toBe(true)
    expect(testSortNoMutate(insertionSort, strings)).toBe(true)
  })


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