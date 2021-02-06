import { Peekable } from './tokenizer'

describe('tokenizer', () => {

  /*
   * Peekable::next()
   */
  test('Peekable.next() should return done == true when constructed with empty string', () => {
    const p = new Peekable('')
    const { done } = p.next()

    expect(done).toBe(true)
  }),

  test('Peekable.next() should return characters in order', () => {
    const p = new Peekable('foo bar')

    expect(p.next().value).toEqual('f')
    expect(p.next().value).toEqual('o')
    expect(p.next().value).toEqual('o')
    expect(p.next().value).toEqual(' ')
    expect(p.next().value).toEqual('b')
    expect(p.next().value).toEqual('a')
    expect(p.next().value).toEqual('r')
  }),

  test('Peekable.next() should handle repeated calls when done == true', () => {
    const p = new Peekable('foo')
    
    p.next()
    p.next()
    p.next()

    expect(p.next().done).toBe(true)
    expect(p.next().done).toBe(true)
    expect(p.next().done).toBe(true)
    expect(p.next().done).toBe(true)
    expect(p.next().done).toBe(true)
    expect(p.next().done).toBe(true)
  })
  
  /*
   * Peekable::peek()
   */
  test('Peekable.peek() should return the next character without consuming it', () => {
    const p = new Peekable('abc')

    expect(p.peek().value).toEqual('a')
    expect(p.next().value).toEqual('a')

    expect(p.peek().value).toEqual('b')
    expect(p.next().value).toEqual('b')
    
    expect(p.peek().value).toEqual('c')
    expect(p.next().value).toEqual('c')    
  }),
  
  test('Peekable.peek() should return an empty string and done == true when iterator is at last char', () => {
    const p = new Peekable('abcde')

    p.next()
    p.next()
    p.next()
    p.next()

    const { done, value } = p.next() 
    expect(value).toEqual('e')
    expect(done).toBe(false)

    const { done: pd, value: pv } = p.peek()
    expect(pv).toEqual('')
    expect(pd).toBe(true)
  })
  
});