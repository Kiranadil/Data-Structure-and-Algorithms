/*Take the above array of objects and
 add a book of your choice to it with
 the same properties. */

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],

    }];

books[2] = {
    name: 'A Brief History of Time',
    topics: ['Space and Time', 'Uncertainty']
};
console.log(books);