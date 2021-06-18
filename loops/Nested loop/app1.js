/*Pose you’re given an array [ [1, 2], [3, 4], [5, 6] ].
 Print all the members of this two-dimensional array 
 using for loop and while nested loops.*/

let array = [[1, 2], [3, 4], [5, 6]];

//  //Using for loop
for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array[i].length; j++) {
        console.log(array[i][j]);
    }
}

//using while nested loop

let n = 0;
while (n <= 3) {
    let m = 0;
    while (m <= 1) {
        console.log(array[n][m]);
        m++;
    }
    n++;

}
