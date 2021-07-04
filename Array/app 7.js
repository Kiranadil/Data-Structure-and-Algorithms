/*You need to place 7 at the 3rd index
of the array: [3, 8, 10, 12, 45, 34, 
34, 34, 2, 2, 0] . How’d you do that? */

let array = [3, 8, 10, 12, 45, 34, 34, 34, 2, 2, 0];
let result = array.splice(3,0,7);
console.log(array);