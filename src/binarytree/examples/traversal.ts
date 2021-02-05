import { BinaryTree } from '../BinaryTree'

export const preorder = <T>(tree: BinaryTree<T>, acc: T[] = []): T[] => {
  if (tree) {
    acc.push(tree.data)
    preorder(tree.getLeft(), acc)
    preorder(tree.getRight(), acc)
  }
  return acc
}

export const postorder = <T>(tree: BinaryTree<T>, acc: T[] = []): T[] => {
  if (tree) {
    postorder(tree.getLeft(), acc)
    postorder(tree.getRight(), acc)
    acc.push(tree.data)
  }
  return acc
}

export const inorder = <T>(tree: BinaryTree<T>, acc: T[] = []): T[] => {
  if (tree) {
    inorder(tree.getLeft(), acc)
    acc.push(tree.data)
    inorder(tree.getRight(), acc)
  }
  return acc
}
