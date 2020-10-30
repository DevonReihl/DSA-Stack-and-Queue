class _Node { 
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  //first in last out FILO
  constructor() {
    this.first = null;
    this.last = null;
  }

  //insert
  enqueue(data) {
    const node = new _Node(data);

    if(this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    //make new node last item
    this.last = node;
  }

  //remove 
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    if (node==this.last) {
      this.last = null;
    }
    return node.value;
  }
}