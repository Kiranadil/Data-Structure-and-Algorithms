//Implement following methods:


//let the array be;
class Stack {
    constructor() {
        this.items = [];
        // this.size = 8;
    }
    //clear: a method that clears stack.
    stackclear() {
        this.items = [];
        this.size = 0;
        return this.items;
    }

    //toString: a method that converts all members of stack into string

    toStringMethod() {
        let string;
        string = this.items.toString();
    }
}