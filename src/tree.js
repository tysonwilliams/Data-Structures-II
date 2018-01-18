/* eslint-disable no-trailing-spaces */
/* eslint-disable no-unused-vars */
class Tree {
  constructor(value) {
    this.value = value;
    this.children = [];
  }
  // Adds a new Tree node with the input value to the current Tree node 
  addChild(value) {
    this.children.push(new Tree(value));
  }
  // Checks this node's children to see if any of them matches the given value
  // Continues recursively until the value has been found or all of the children
  // have been checked
  contains(value) {
    let contains = false;
    if (this.value === value) return contains = true;
    const search = (children) => {
      children.forEach((child) => {
        if (child.value === value) return contains = true;
        if (child.children.length) {
          search(child.children);
        }
      });
    };
    // start recursion
    search(this.children);
    return contains;
  }
}

module.exports = Tree;
