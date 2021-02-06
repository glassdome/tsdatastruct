import { BinaryTree } from '../BinaryTree'
import { preorder, inorder, postorder } from './traversal'


describe('traversal', () => {

  const tree = new BinaryTree<number>(0);

  beforeAll(() => {
    tree.insertLeft(1)
    tree.insertRight(2)
  });

  test('preorder() should perform a preorder traversal of the given tree.', () => {
    expect(preorder(tree)).toEqual([0, 1, 2])
  }),
  
  test('postorder() should perform a postorder traversal of the given tree.', () => {
    expect(postorder(tree)).toEqual([1, 2, 0]) 
  }),
  
  test('inorder() should perform an inorder traversal of the given tree.', () => {
    expect(inorder(tree)).toEqual([1, 0, 2])  
  })
});
