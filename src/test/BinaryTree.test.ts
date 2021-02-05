import { BinaryTree } from '../binarytree/BinaryTree'

describe('BinaryTree', () => {

  test('.insertLeft() should instantiate a new BinaryTree', () => {
    const t = new BinaryTree<number>(0)
    expect(t.getLeft()).toBeNull()

    t.insertLeft(1)
    const left = t.getLeft()
    expect(left).toBeDefined()
    expect(left).toBeInstanceOf(BinaryTree)
  }),
  
  test('.insertRight() should instantiate a new BinaryTree', () => {
    const t = new BinaryTree<number>(0)
    expect(t.getRight()).toBeNull()

    t.insertRight(1)
    const left = t.getRight()
    expect(left).toBeDefined()
    expect(left).toBeInstanceOf(BinaryTree)
  }),  
  
  test('.getLeft() should instantiate a new BinaryTree', () => {
    const t = new BinaryTree<number>(0)

    t.insertLeft(1)
    const left = t.getLeft()
    expect(left.data).toEqual(1)
  }),
  
  test('.getRight() should instantiate a new BinaryTree', () => {
    const t = new BinaryTree<number>(0)

    t.insertRight(1)
    const right = t.getRight()
    expect(right.data).toEqual(1)
  })

});