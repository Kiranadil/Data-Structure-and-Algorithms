/*Consider the array: [2, 2, 1, 0, 9, 39, 20] .
 Can you find out how many times 2 occurs in
 this array and return the count of it? */

let array = [2, 2, 1, 0, 9, 39, 20];
let count = 0;
for (let i = 0; i < array.length; i++) {
    if (array[i] == 2) {
        count++;
    }
}
console.log(count);