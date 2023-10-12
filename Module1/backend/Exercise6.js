const book = {
    "title" : "What Should I Eat Tonight",
    "description" : "Give reader some ideas for dinner option. ",
    "author" : "Akira Li",
    "pages" : 365
}

console.log(book.title);
console.log(book.description);
console.log(book.author);
console.log(book.pages);

console.log(JSON.stringify(book));

console.log(book);

book.description = "Get some inspiration for your dinner!";
console.log(book);