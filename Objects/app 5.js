/*Again consider the above array of objects,
and delete one of the objects that represent a book. */

let books = [
    {
        name: "The Lean Startup",
        topics: ["entrepreneurship", "startups"],
    },
    {
        name: "War and Peace",
        topics: ["peace", "politics"],

    }];
    for (let i = 0; i < books.length- 1; i++) {
        books[i] = books[i + 1];
    }
console.log(books);