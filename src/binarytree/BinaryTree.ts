
export class BinaryTree<T> {
  private _left: BinaryTree<T> = null
  private _right: BinaryTree<T> = null

  constructor(public data: T) {
  }

  insertLeft = (data: T) => {
    const newNode = new BinaryTree<T>(data)
    if (this._left === null) {
      this._left = newNode
    } else {
      let tmp = newNode
      tmp._left = this._left
      this._left = tmp
    }
  }
  
  insertRight = (data: T) => {
    const newNode = new BinaryTree<T>(data)
    if (this._right === null) {
      this._right = newNode
    } else {
      let tmp = newNode
      tmp._right = this._right
      this._right = tmp
    }
  }  

  getLeft = (): BinaryTree<T> => {
    return this._left
  }

  getRight = (): BinaryTree<T> => {
    return this._right
  }   

}