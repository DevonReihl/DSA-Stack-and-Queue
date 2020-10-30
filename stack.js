class _Node {
  constructor(dat, next) {
    this.data = data;
    this.next = next;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  //put into stack
  push(data) {
    if (this.top === null) {
      this.top = new _Node(date, null);
      return this.top;
    }

    //If there is a top to our stack
    const node = new _Node(date, this.top);
    this.top = node;

  }

  //remove from stack ONLY TOP
  pop(data) {
    const node = this.top;
    this.top = node.next;
    return node.data;
  }
  
}

function peek() {

}

function isEmpty() {

}

function display() {

}

function main() {
  const starTrek = new Stack;
  starTrek.push(Kirk);
  starTrek.push(Spock);
  starTrek.push(McCoy);
  starTrek.push(Scotty);
}