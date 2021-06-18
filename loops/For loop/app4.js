/*Consider you are given an array [2,0,1,6,45,89].
You need to find the largest element in the array.
How’d you do that? */

let numberArray = [2, 0, 1, 6, 45, 89];
let max = 0;
for (let i = 0; i < numberArray.length; i++) {
    if (numberArray[i] > max) {
        max = numberArray[i]
    }
}
console.log(max);
