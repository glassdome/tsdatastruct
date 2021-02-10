import TreeNode, { MaybeTreeNode } from '../src/trees/binarysearchtree/TreeNode';

const newNode = <K, V>(k: K, v: V): TreeNode<K, V> => {
  return new TreeNode<K, V>(k, v);
};

describe('TreeNode', () => {
  /*
   * Inserts to the left
   */
  // When node is empty, set left child when the new key is < than the current key.
  test('.put() should set left child on empty node when new key < current key.', () => {
    const parent = newNode(5, 'foo');
    const left = parent.put(4, 'bar');

    expect(parent.leftChild === left).toBe(true);
  }),
    /*
     * Testing for grand-children. Wen given a second node with lower key, node should be passed to
     * the left child to add as a child. Note: if given key is < left.key, it will be added as left.left
     */
    test('.put() should set left descendant child when key is < leftChild.key', () => {
      const parent = newNode(10, 'foo');
      const leftChild = parent.put(5, 'bar');
      const leftGrandChild = parent.put(1, 'baz');

      expect(leftChild === parent.leftChild).toBe(true);
      expect(leftGrandChild === leftChild?.leftChild).toBe(true);
    }),
    /*
     * Inserts to the right.
     */
    test('.put() should set right child on empty node when new key > current key.', () => {
      const parent = newNode(5, 'foo');
      const right = parent.put(6, 'bar');

      expect(parent.rightChild === right).toBe(true);
    }),
    /*
     * See comment above - here we're testing for grandchild on the right
     */
    test('.put() should set right descendant child when key > rightChild.key.', () => {
      const parent = newNode(10, 'foo');
      const rightChild = parent.put(15, 'bar');
      const rightGrandChild = parent.put(20, 'baz');

      expect(rightChild === parent.rightChild).toBe(true);
      expect(rightGrandChild === rightChild?.rightChild).toBe(true);
    }),
    test('.length should return zero when the node has zero children', () => {
      expect(newNode(0, '').length).toEqual(0);
    }),
    test('.length() should retun 1 when the node has a single child on the left', () => {
      const parent = newNode(5, '');
      parent.put(4, '');

      expect(parent.length).toEqual(1);
    }),
    test('.length() should retun 1 when the node has a single child on the right', () => {
      const parent = newNode(5, '');
      parent.put(6, '');

      expect(parent.length).toEqual(1);
    }),
    test('.length() should retun 2 when it has both left and right children', () => {
      const parent = newNode(5, '');
      parent.put(4, ''); // left
      parent.put(6, ''); // right

      expect(parent.length).toEqual(2);
    }),
    test('.get() should return undefined if no child exists with the given key', () => {
      expect(newNode(0, '').get(1)).toBeUndefined();
    }),
    test('.get() should return the left child if it exists with the given key', () => {
      const n = newNode(1, '');
      const n1 = n.put(0, '');

      expect(n1 === n.get(0)).toBe(true);
    }),
    test('.get() should return the right child if it exists with the given key', () => {
      const n = newNode(0, '');
      const n1 = n.put(1, '');
      expect(n1 === n.get(1)).toBe(true);
    });
});
