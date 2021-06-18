/*Suppose you’re given an array of animals
[[‘cat’, ‘rabbit’], [‘pigeon’, ‘parrot’], [‘goldfish’, ‘whale’]].
Now, when you encounter ‘car or ‘rabbit’ inside a nested loop,
print ‘pet animals’ in the console. Also, if you encounter ‘pigeon’
or ‘parrot’, print ‘pet birds’. Also, when you encounter
‘goldfish’ or ‘whale’, print ‘fish’ */

let animalArray = [["cat", "rabbit"], ["pigeon", "parrot"], ["goldfish", "whale"]]
for (let i = 0; i < animalArray.length; i++) {
    for (let k = 0; k <= 1; k++) {
        console.log("pet animal " + animalArray[i][k]);

    }
    i++;
    for (let l = 0; l <= i; l++) {
        console.log("pet bird " + animalArray[i][l]);

    }
    i++;
    for (let j = 0; j < i; j++) {
        console.log("fish " + animalArray[i][j]);

    }
}