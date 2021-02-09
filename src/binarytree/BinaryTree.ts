export class BinaryTree<T> {
  private left?: BinaryTree<T>;
  private right?: BinaryTree<T>;

  constructor(public data: T) {}

  insertLeft = (data: T): void => {
    const newNode = new BinaryTree<T>(data);
    if (this.left === null) {
      this.left = newNode;
    } else {
      const tmp = newNode;
      tmp.left = this.left;
      this.left = tmp;
    }
  };

  insertRight = (data: T): void => {
    const newNode = new BinaryTree<T>(data);
    if (this.right === null) {
      this.right = newNode;
    } else {
      const tmp = newNode;
      tmp.right = this.right;
      this.right = tmp;
    }
  };

        getLeft = (): BinaryTree<T> | undefined => {
    return this.left;


  }

        getRight = (): BinaryTree<T> | undefined => {
          return this.right;
    };
}
