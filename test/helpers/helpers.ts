/*
 * Collection of somewhat random utility functions to help with unit-tests.
 */

/*
 * Make a copy of an array
 */
export const clone = <T>(list: T[]): T[] => {
  return Object.assign([], list);
};

/*
 * Swap two elements in an array.
 */
export const swap = <T>(list: T[], lo: number, hi: number): void => {
  const tmp = list[lo];
  list[lo] = list[hi];
  list[hi] = tmp;
};

/*
 * Knuth-Fisher-Yates shuffle
 * https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
 */
export const shuffle = <T>(list: T[]): T[] => {
  const output = clone(list);
  for (let i = output.length - 1; i > 0; i--) {
    const n = Math.floor(Math.random() * i);
    swap(output, i, n);
  }
  return output;
};

/*
 * Determine if two arrays are shallowly identical (no reference checking). Arrays
 * are considered the same if they each contain the same elements in the same order.
 */
export const arrayShallowEquals = <T>(a: T[], b: T[]): boolean => {
  if (a.length !== b.length) {
    return false;
  } else {
    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }
  }
  return true;
};

export const DEFAULT_DECIMALS = 2;
/*
 * Return pseudo-random float with value between min and max incluxive.
 */
export const randomFloat = (min: number, max: number, decimalPlaces = 2): number => {
  const n = Number((Math.random() * (max - min + 1) + min).toFixed(decimalPlaces));
  // Theres a corner case where the value from math.random leads can lead to a number max + 1
  // If that happens we just return max
  return n > max ? max : n;
};

/*
 * Return an array of pseudo-random numbers with values between min and max inclusive.
 */
export const randomFloatSeq = (
  min: number,
  max: number,
  size: number,
  decimalPlaces = 2,
): number[] => {
  return [...Array(size)].map((_) => randomFloat(min, max, decimalPlaces));
};

/*
 * Return a pseudo-random number between min and max inclusive. 50% chance of a float.
 */
export const randomNumber = (min: number, max: number, decimalPlaces = 2): number => {
  const n = randomFloat(min, max);
  return maybeTrue(50) ? Number(n.toFixed(decimalPlaces)) : Math.floor(n);
};

/*
 * Return an array of pseudo-random number between min and max inclusive. 50% chance of a float.
 */
export const randomNumberSeq = (
  min: number,
  max: number,
  size: number,
  decimalPlaces = 2,
): number[] => {
  return [...Array(size)].map((_) => randomNumber(min, max, decimalPlaces));
};

/*
 * Return a pseudo random integer between min and max inclusive
 */
export const randomInt = (min: number, max: number): number => {
  return Math.floor(randomFloat(min, max));
};

/*
 * Return an array of pseudo-random integers with values between min and max
 */
export const randomIntSeq = (min: number, max: number, size: number): number[] => {
  return [...Array(size)].map((_) => {
    return randomInt(min, max);
  });
};

/*
 * Return true n percent of the time
 */
export const maybeTrue = (percent: number): boolean => {
  if (percent < 0 || percent > 100)
    throw new Error(`Value must be in range 0-100. Received: ${percent}`);
  return Math.random() < percent / 100;
};

/**
 * Return true if n is between min and max inclusive
 * @param n the number to test
 * @param min the minimun value n can have
 * @param max the maximum value n can have
 */
export const inRange = (n: number, min: number, max: number): boolean => {
  return n >= min && n <= max;
};
