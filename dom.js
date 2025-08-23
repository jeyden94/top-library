// Initialize Array & Library Grid //

let myLibrary = [];

const libraryGrid = document.querySelector(".library-grid");


// Initialize Book Class // 

class Book {

    constructor(title, author, pages, read) {
        this.id = crypto.randomUUID();
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read; 
    }

}

// Initialize addBook and deleteBook Functions //

function addBookToLibrary(title, author, pages, read) {

    let newBook = new Book(title, author, pages, read);
    
    myLibrary.push(newBook);

    var bookCard = document.createElement("div");
    var bookId = document.createElement("div");
    var bookTitle = document.createElement("div");
    var bookAuthor = document.createElement("div");
    var bookPages = document.createElement("div");
    var bookRead = document.createElement("div");

    var bookDeleteButton = document.createElement("button")

    bookCard.classList.add("book-card");
    bookId.classList.add("book-id");
    bookTitle.classList.add("book-title");
    bookAuthor.classList.add("book-author");
    bookPages.classList.add("book-pages");
    bookRead.classList.add("book-read");
    bookDeleteButton.classList.add("book-delete-btn");

    libraryGrid.appendChild(bookCard);

    bookCard.appendChild(bookTitle);
    bookCard.appendChild(bookAuthor);
    bookCard.appendChild(bookPages);
    bookCard.appendChild(bookRead);
    bookCard.append(bookDeleteButton);

    bookTitle.textContent = myLibrary[myLibrary.length - 1].title;
    bookAuthor.textContent = myLibrary[myLibrary.length - 1].author;
    bookPages.textContent = `Pages: ${myLibrary[myLibrary.length - 1].pages}`;

    if (myLibrary[myLibrary.length - 1].read === true) {
        bookRead.textContent = "Read It!";
    } else {
        bookRead.textContent = "On My List";
    }

    bookDeleteButton.textContent = "Delete Book"

    bookDeleteButton.dataset.id = myLibrary[myLibrary.length - 1].id;
    bookCard.dataset.id = myLibrary[myLibrary.length - 1].id;

    bookDeleteButton.addEventListener("mouseup", deleteBookFromLibrary)
}

function deleteBookFromLibrary(e) {
    var thisBookDataId = e.target.getAttribute("data-id");
    for (let book in myLibrary) {
        if (myLibrary[book].id === thisBookDataId) {
            var myDiv = document.querySelectorAll(`.book-card[data-id="${thisBookDataId}"]`);
            myDiv[0].remove();
        }
    }
}

// Form, Form Buttons, & Form Input //

const dialog = document.querySelector("dialog");

const showButton = document.querySelector(".new-book-btn")
const closeButton = document.querySelector(".close-book-form-btn")
const submitButton = document.querySelector(".submit-book-form-btn")

const inputBookTitle = document.getElementById("book_title");
const inputBookAuthor = document.getElementById("book_author");
const inputBookPages = document.getElementById("book_pages");
const inputBookRead = document.getElementById("book_read");

// Form Button Listeners //

showButton.addEventListener("mouseup", openForm)
closeButton.addEventListener("mouseup", closeForm)
submitButton.addEventListener("mouseup", submitForm)

// Form Input Functions //

function openForm() {
    dialog.showModal();
}

function closeForm() {
    dialog.close();
}

function submitForm(e) {
    e.preventDefault();
    var inputBookTitleValue = inputBookTitle.value;
    var inputBookAuthorValue = inputBookAuthor.value;
    var inputBookPagesValue = inputBookPages.value;
    var inputBookReadValue = inputBookRead.checked;

    addBookToLibrary(inputBookTitleValue, inputBookAuthorValue, inputBookPagesValue, inputBookReadValue);

    dialog.close();
}

// Starter Books //

addBookToLibrary("The Silmarillion", "J.R.R. Tolkien", "365", true);
addBookToLibrary("Dune", "Frank Herbert", "617", true);
addBookToLibrary("A Fire Upon The Deep", "Vernor Vinge", "432", true);