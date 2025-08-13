let myLibrary = [];

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor")
    }
    this.id = crypto.randomUUID();
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};

function addBookToLibrary(title, author, pages, read) {
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook)
}

addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", "365", true);
addBookToLibrary("Dune", "Frank Herbert", "617", true);
addBookToLibrary("A Fire Upon The Deep", "Vernor Vinge", "432", true);

