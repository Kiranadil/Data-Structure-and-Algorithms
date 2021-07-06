/*Your task is to traverse the object 
and print its properties (both names and values). */

let userObject = {

    userName: "Philip",

    fatherName: "Norman",

    className: "four",

};
let text = " ";
for (let element in userObject) {
 console.log(text + userObject[element] + "")
}
