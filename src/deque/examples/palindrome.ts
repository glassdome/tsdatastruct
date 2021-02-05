import { Deque } from '../Deque'

export const palindromeCheck = (s: string): boolean => {
    
  const deque = new Deque<string>()

  // Add all chars to deque in order.
  Array.from(s).forEach(c => deque.addRear(c))

  let same = true
  // Pull one char from each side and check if they're equal
  while (deque.size > 1 && same) {
    const a = deque.removeRear()
    const b = deque.removeFront()

    if (a !== b) same = false
  }
  return same 
}
