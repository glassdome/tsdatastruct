import { BinaryTree } from '../BinaryTree'
import { Stack } from '../../stack/Stack'
import { Tokenizer } from './tokenizer'


export const isNumber = (s: string): boolean => {
  return !isNaN(+s)
}

export const isOperator = (c: string): boolean => {
  return '+-*/'.indexOf(c) >= 0
}

export const tokenize = (expr: string): string[] => {
  return new Tokenizer(expr).parse()
}

/*
 * Parse an arithmetic expression into a simple AST
 * Note: expressions must be *fully* parenthesized!
 */
export const makeParseTree = (expr: string) => {

  const input: string[] = tokenize(expr)

  const tree = new BinaryTree<string>('')
  const stack = new Stack<BinaryTree<string>>()
  stack.push(tree)

  let current = tree
  for (let char of input) {

    if (char == '(') {
      current.insertLeft('')
      stack.push(current)
      current = current.getLeft()

    } else if (isOperator(char)) {
      current.data = char
      current.insertRight('')
      stack.push(current)
      current = current.getRight()

    } else if (isNumber(char)) {
      current.data = char
      current = stack.pop()
    
    } else if (char === ')') {
      current = stack.pop()

    } else {
      throw new Error(`Unrecognized character: ${char}`)
    }
  }
  return tree
}

type ArithmeticOp = (a: number, b: number) => number;
export const operators = new Map<string, ArithmeticOp>([
  [ '+', (a: number, b: number) => a + b],
  [ '-', (a: number, b: number) => a - b],
  [ '*', (a: number, b: number) => a * b],
  [ '/', (a: number, b: number) => a / b]
]);

/*
 * Evaluate the parsed expression
 */
export const evaluate = (tree: BinaryTree<string>): number => {
  const left = tree.getLeft()
  const right = tree.getRight()
  
  if (left && right) {
    const op = operators.get(tree.data)
    return op(evaluate(left), evaluate(right))
  } else {
    return +tree.data
  }
}
