/*Work on the problem above to dynamically 
print the name of each animal and prepend 
it with ‘this is’ conditionally. Print 
‘something else’ if the name doesn’t equal
 any of the names in the list. */

 let petAnimals = ["cat", "rabbit", "pigeon", "parrot", "goldfish"];
for (let i = 0; i < petAnimals.length; i++) {
    let animal = "cat";
    if(animal == petAnimals[i]){
    console.log("This is " + petAnimals[i]);
    }
    else{
        console.log("something else");
    }

}