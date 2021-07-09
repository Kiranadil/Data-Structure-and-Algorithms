/*Implement following methods. Don’t forget to
increase and decrease the size when you add or
remove an element from the stack. */

//let the array is:
class Stack {
    constructor() {
        this.items = [];
        this.size = 8;//let the size = 8
    }

    //Q#1:push: a method through that you can add a value to the stack

    push(item) {
        this.items.push(item);
    }
    //Q#2:peek: a method through which you can get the value on the top of stack
    peek() {
        return this.items[items.length - 1];
    }
    //Q#3: pop: a method through which you can remove the first element of the stack
    pop() {
        this.items.pop();
    }
}