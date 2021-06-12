/* You need to write a function that prints out ‘wild animals’
 if the names of lion and leopard are passed to it. However, 
 if I pass the names of cats and rabbits to it, it prints ‘pet
 animals’. However, if I pass any other name to it, it says ‘unknown’ */

let animal = "cats";
switch (animal) {
    case "lion":
    case "leopard":
        console.log("wild animal");
        break;
    case "cats":
    case "rabbits":
        console.log("pet animals");
        break;
    default:
        console.log("unknown");
        break;
}