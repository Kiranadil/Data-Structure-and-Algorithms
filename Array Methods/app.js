let array = [0, 5, 8, 5, 7, 8, 9, 5, 4, 3]

/*function addingNumAtStart(username){
//place 4 number at the end of array
array.push(username);
console.log(array);
}
function addingNumAtEnd(username) {
//place 9 number at the start of the array
array.unshift(username);
console.log(array);
}*/

function customInsertAtTheEnd(userName) {
    array.length = array.length + 1;
    array[array.length - 1] = userName;
}
customInsertAtTheEnd(5);
console.log(array);

function customAtTheStart(userName) {
    array.length = array.length + 1;
    array[0]=array[userName];
    for (let i = array.length-1; i > 0; i--) {
        array[i+1] = array[i];
    }
}
customAtTheStart(7);
console.log(array);
