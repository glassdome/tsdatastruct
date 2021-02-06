/*
 * Collection of somewhat random utility functions to help with unit-tests.
 */


/*
 * Determine if two arrays are shallowly identical (no reference checking). Arrays
 * are considered the same if they each contain the same elements in the same order.
 */
export const arrayShallowEquals = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) {
    return false
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false
      }
    }
  }
  return true
}