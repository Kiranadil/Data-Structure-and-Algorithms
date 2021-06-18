/*Suppose you are given an array: 
[1, 8, 7, 3, 2, 9, 10, 12]. You need to
find out whether a number is prime or not */

let numberArray = [1, 8, 7, 3, 2, 9, 10, 12];
let isPrime = false;
for (i = 0; i < numberArray.length; i++) {
    for (let j = 0; j < i; j++) {
        if (numberArray[i] % j == 0) {
            isPrime = true;
        }
    }
    if (isPrime) {
        console.log(numberArray[i] + " is a prime number");
    }
    else {
        console.log(numberArray[i] + " is not a prime number");
    }
}