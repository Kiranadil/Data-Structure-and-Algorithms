/*You are given an array of pet animals like 
[‘cat’, ‘rabbit’, ‘pigeon’, ‘parrot’, ‘goldfish’].
You need to loop over it and then if you encounter
the name of rabbit, print out ‘this is rabbit’.
When you don’t get the name of a rabbit, print 
‘this is not a rabbit’.
*/
let petAnimals= ["cat", "rabbit", "pigeon", "parrot", "goldfish"];
for (let i = 0; i < petAnimals.length; i++) {
    if(petAnimals[i]=="rabbit"){
  console.log("This is rabbit");
    }
    else{
        console.log("This is not a rabbit");
    }
    
}