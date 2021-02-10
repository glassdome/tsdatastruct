export type Maybe<T> = T | undefined;
export type MaybeTreeNode<K, V> = Maybe<TreeNode<K, V>>;

class TreeNode<K, V> {
  private parent?: TreeNode<K, V>;
  private left?: TreeNode<K, V>;
  private right?: TreeNode<K, V>;
  private size = 0;

  constructor(
    public key: K,
    public value: V,
    left?: TreeNode<K, V>,
    right?: TreeNode<K, V>,
    parent?: TreeNode<K, V>,
  ) {
    this.left = left;
    this.right = right;
    this.parent = parent;
  }

  put = (key: K, value: V): MaybeTreeNode<K, V> => {
    let output: MaybeTreeNode<K, V>;

    if (key < this.key) {
      if (this.left) {
        output = this.left.put(key, value);
      } else {
        output = new TreeNode<K, V>(key, value);
        this.left = output;
      }
    } else {
      if (this.right) {
        output = this.right.put(key, value);
      } else {
        output = new TreeNode<K, V>(key, value);
        this.right = output;
      }
    }
    this.size += 1;
    return output;
  };

  get = (key: K): MaybeTreeNode<K, V> => {
    let output: MaybeTreeNode<K, V>;

    if (key === this.key) {
      output = this;
    } else if (key < this.key) {
      if (this.left) {
        output = this.left.get(key);
      } else {
        output = undefined;
      }
    } else {
      if (this.right) {
        output = this.right.get(key);
      } else {
        output = undefined;
      }
    }
    return output;
  };

  // TODO:This method is in progress
  // delete = (key: K): MaybeTreeNode<K, V> => {

  //   const zeroChildren = () => !(this.left || this.right)
  //   const oneChild = () => (this.left || this.right) && !(this.left && this.right)

  //   if (key === this.key) {
  //     if (zeroChildren()) {
  //       // No children - remove self from parent
  //       if (this === this.parent?.left) {
  //         this.parent.left = undefined
  //       } else {
  //         this.parent?.right = undefined
  //       }

  //     } else if (oneChild()) {
  //       // We have one child - figure out which one
  //       if (this.left) {
  //         // We have a left child
  //         if (this === parent.left) {
  //           // We are the left child of our parent
  //           parent.left = this.left
  //         } else {
  //           // We are the right child of our parent
  //           parent.right = this.left
  //         }
  //       } else {
  //         // We have a right child
  //         if (this === parent.left) {
  //           parent.left = this.right
  //         } else {
  //           parent.right = this.right
  //         }
  //       }
  //     } else {
  //     // We have 2 children

  //     }
  //   } else {
  //     // We are not being deleted...continue searching...
  //   }

  //   return undefined;
  // };

  get leftChild(): MaybeTreeNode<K, V> {
    return this.left;
  }

  get rightChild(): MaybeTreeNode<K, V> {
    return this.right;
  }

  get length(): number {
    return this.size;
  }
}
export default TreeNode;
