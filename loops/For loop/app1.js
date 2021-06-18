/*Suppose you are given an array: 
[1, 8, 7, 3, 2, 9, 10, 12]. You need to
find out whether a number is prime or not */

let numberArray = [1, 8, 7, 3, 2, 9, 10, 12];
for (let i = 0; i < numberArray.length; i++) {
    let isPrime = true;

    for (let j = 2; i > j; j++) {

        if (i % j == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(numberArray[i] + " is a prime number");
    }
    else {
        console.log(numberArray[i] + " is not a prime number");
    }
}