import { BinaryTree } from '../src/binarytree/BinaryTree';

//type StringTree = BinaryTree<string>
type NumTree = BinaryTree<number>;

describe('BinaryTree', () => {
  test('.insertLeft() should instantiate a new BinaryTree', () => {
    const t = new BinaryTree<number>(0);
    expect(t.getLeft()).toBeUndefined();

    t.insertLeft(1);
    const left = t.getLeft() as NumTree;
    expect(left).toBeDefined();
    expect(left).toBeInstanceOf(BinaryTree);
  }),
    test('.insertRight() should instantiate a new BinaryTree', () => {
      const t = new BinaryTree<number>(0);
      expect(t.getRight()).toBeUndefined();

      t.insertRight(1);
      const left = t.getRight() as NumTree;
      expect(left).toBeDefined();
      expect(left).toBeInstanceOf(BinaryTree);
    }),
    test('.getLeft() should instantiate a new BinaryTree', () => {
      const t = new BinaryTree<number>(0);

      t.insertLeft(1);
      const left = t.getLeft() as NumTree;
      expect(left.data).toEqual(1);
    }),
    test('.getRight() should instantiate a new BinaryTree', () => {
      const t = new BinaryTree<number>(0);

      t.insertRight(1);
      const right = t.getRight() as NumTree;
      expect(right.data).toEqual(1);
    });
});
