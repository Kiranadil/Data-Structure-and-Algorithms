//Implement following methods:

//let the array be;

class Stack {
    constructor() {
        this.items = [];
        // this.size = 8;
    }
    /*isEmpty: a method that checks whether the
     given stack is empty or not. It will return
      a boolean */

    isEmpty() {
        if (this.items.length == 0) {
            return true;
        }
        else {
            return false;
        }
    }

    /*isFull: a method that checks whether the
     given stack is full or not. Hint: Compare
    the length of array with size */

    isFull() {
        return (this.items.length == this.items.length - 1);
    }
}