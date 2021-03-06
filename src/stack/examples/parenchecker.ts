import { Stack } from '../Stack';

const openers = '([{';
const closers = ')]}';

const opens = (c: string): boolean => openers.indexOf(c) >= 0;
//const closes = (c: string): boolean => closers.indexOf(c) >= 0;

const isParen = (c: string): boolean => {
  return (openers + closers).indexOf(c) >= 0;
};

const matching = (open: string, close: string): boolean => {
  return openers.indexOf(open) === closers.indexOf(close);
};

export const validParens = (input: string): boolean => {
  const stack = new Stack<string>();

  let isBalanced = true;
  let index = 0;

  while (index < input.length && isBalanced) {
    const char = input[index];
    let top = '';

    if (isParen(char)) {
      if (opens(char)) {
        stack.push(char);
      } else {
        if (stack.isEmpty()) {
          isBalanced = false;
        } else {
          top = stack.pop();
          if (!matching(top, char)) {
            isBalanced = false;
          }
        }
      }
    }
    index += 1;
  }
  return isBalanced && stack.isEmpty();
};
