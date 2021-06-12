/*Consider the situation in which you are required
to check if a number is 1 or 0. If it’s 1 you need
to print true. Otherwise, you should print false. */

let number = 1;
switch (number) {
    case 0:
        console.log("true");
        break;
    case 1:
        console.log("false");
        break;
    default:
        console.log("The number is neither 0 nor 1");
        break;
}