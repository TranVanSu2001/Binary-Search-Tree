class Node {
  constructor(data) {
    this.data = data; 
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) { 
    var newNode = new Node(data);

    if(this.root === null) { 
      this.root = newNode;
    }
    else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
      if(newNode.data < node.data) {
        if(node.left === null) { 
          node.left = newNode;
        }
        else {
          this.insertNode(node.left, newNode);
        }
      }

      else{
        if(node.right === null) {
          node.right = newNode;
        }
        else {
          this.insertNode(node.right, newNode)
        }
      }
    }

    remove(data) {
      this.root = this.removeNode(this.root, data);
    }

    removeNode(node, key) {
      if(node === null) {
        return null;
       } // cây rỗng return 
        else if(key < node.data) {
          node.left = this.removeNode(node.left, key); // gán node.left là node cần tìm vì sau khi
          // this.removeNode sẽ trả ra 1 node mà nó tìm được                    
          return node;
        }
        else if(key > node.data) {
          node.right = this.removeNode(node.right, key);
          return node;
        }

        else {
          if(node.left === null && node.right === null) {
            node = null;
            return node;
          }

          if(node.left === null) {
            node = node.right;
            return node;
          }
          else if(node.right === null) {
            node = node.left;
            return node;
          }
        }    
        //các trường hợp trên là xóa node không có hoặc chỉ có left hoặc righ, khi xóa node mà node có 
        // cả left và right, thì xóa node đó và tìm giá trị node nhỏ nhất thế vào vị trí đó

        //TH node cần xóa nó 2 node con
        var aux = this.findMinNode(node.right);
        node.data = aux.data; //(1): thay node cần xóa bằng node nhỏ nhất bên phải node cần xóa
 
        node.right = this.removeNode(node.right, aux.data);//(1): xóa node nhỏ nhất bên phải node cần xóa
        return node;
  }

  findMinNode(node) { // tìm node nhỏ nhẩt, thì là node ở bên trái ngoài cùng
    if(node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left)
    }
  }

  getRootNode() {
    return this.root;
  }

  search(node, data) {
    if(node  === null) {
      return null;
    }
    else if(data < node.data) {
      return this.search(node.left, data)
    }

    else if(data > node.data) {
      return this.search(node.right, data)
    }

    else {
      return node;
    }
  }

  inorder(node) {
    if(node !== null)
    {
        // console.log(node)
        this.inorder(node.left);
        console.log(node.data);
        this.inorder(node.right); 
    }
  }

  preorder(node) {
    if(node !== null)
    {
        console.log(node.data);
        this.preorder(node.left);
        this.preorder(node.right);
    }
  }

  postorder(node) {
    if(node !== null)
    {
        this.postorder(node.left);
        this.postorder(node.right);
        console.log(node.data);
    }
  }
}


var BST = new BinarySearchTree();
BST.insert(8)
BST.insert(6)
BST.insert(7)
BST.insert(4)
BST.insert(3)
BST.insert(11)
// BST.insert(6)
// BST.remove(6)

var root = BST.getRootNode()
console.log('search' ,BST.search(root, 6))
BST.inorder(root)

console.log(BST)
