class Stack {
    constructor() {
        this.items = [];
        // this.size = 8;
    }
    push(item) {
        this.items.push(item);
    }
    pop() {
        this.items.pop();
    }
    peek() {
        return this.items[items.length - 1];
    }
    isEmpty() {
        if (this.items.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }
    isFull() {

    }
    printStack() {
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }

    }
}
let myStack = new Stack();
myStack.push('Karachi');
myStack.pop();
myStack.printStack();