import { clone, shuffle } from '../test/helpers'

/*
 * Swap two elements in an array. 
 */
export const swap = <T>(list: T[], lo: number, hi: number) => {
  let tmp = list[lo]
  list[lo] = list[hi]
  list[hi] = tmp
}

/*
 * The simplest sort.
 */
export const bubbleSort = <T>(items: T[]): T[] => {
  let output = clone(items)

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length-1; j++) {
      if (output[j] > output[j+1]) {
        swap(output, j, j+1)
      }
    }
  }
  return output
}

/*
 * Just like bubble sort, but short-circuits as soon as there is a pass
 * with no exchanges (meaning: it quits when the array is sorted)
 */
export const shortBubbleSort = <T>(items: T[]): T[] => {
  let output = clone(items)
  let exchanged = false

  for (let i = 0; i < output.length; i++) {
    for (let j = 0; j < output.length-1; j++) {
      if (output[j] > output[j+1]) {
        swap(output, j, j+1)
        exchanged = true
      }
    }
    if (!exchanged) break;
  }
  return output
}

export const selectionSort = <T>(items: T[]): T[] => {
  let output = clone(items)  

  for (let slot = output.length-1; slot > 0; slot--) {
    let maxPosition = 0
    for (let pointer = 1; pointer < slot+1; pointer++) {
      if (output[pointer] > output[maxPosition]) {
        maxPosition = pointer
      }
    }
    swap(output, maxPosition, slot)
  }
  return output
}

export const insertionSort = <T>(items: T[]): T[] => {
  throw new Error('Not Implemented!')
  return []  
}

export const shellSort = <T>(items: T[]): T[] => {
  throw new Error('Not Implemented!')
  return []
}

export const  mergeSort = <T>(items: T[]): T[] => {
  throw new Error('Not Implemented!')
  return []
}

export const quickSort = <T>(items: T[]): T[] => {
  throw new Error('Not Implemented!')
  return []
}
