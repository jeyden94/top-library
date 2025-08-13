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

const libraryGrid = document.querySelector(".library-grid")

function displayLibrary() {
    for (let book in myLibrary) {

        var bookCard = document.createElement("div");
        var bookId = document.createElement("div");
        var bookTitle = document.createElement("div");
        var bookAuthor = document.createElement("div");
        var bookPages = document.createElement("div");
        var bookRead = document.createElement("div");


        bookCard.classList.add("book-card");
        bookId.classList.add("book-id");        
        bookTitle.classList.add("book-title");
        bookAuthor.classList.add("book-author");
        bookPages.classList.add("book-pages");
        bookRead.classList.add("book-read");                        

        libraryGrid.appendChild(bookCard);

        bookCard.appendChild(bookTitle);
        bookCard.appendChild(bookAuthor);
        bookCard.appendChild(bookPages);
        bookCard.appendChild(bookRead);        
        bookCard.appendChild(bookId);             

        bookTitle.textContent += myLibrary[book].title;
        bookAuthor.textContent += myLibrary[book].author;
        bookPages.textContent += myLibrary[book].pages;
        bookRead.textContent += myLibrary[book].read;        
        bookId.textContent += myLibrary[book].id;

    }
}