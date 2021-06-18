/*Consider the above array again and find
the smallest element in the array.
*/
let numberArray = [2, 0, 1, 6, 45, 89];
let min = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] < min) {
        min = numberArray[i]
    }
}
console.log(min);