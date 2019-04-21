class Book {
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    static displayBooks(){
        let storedBooks = [];
        storedBooks.forEach((book) => UI.addBookToTable(book));
    }

    static addBookToTable(book) {
        let tableBody = document.querySelector('#table-body');
        let row = document.createElement('tr');
        row.innerHTML = `<td>${book.title}</td>
                        <td>${book.author}</td>
                        <td>${book.isbn}</td>
                        <td>
                            <a href="#" class="text-danger">
                                <i class="fa fa-times-circle fa-2x"></i>
                            </a>
                        </td>`;
        tableBody.appendChild(row);
    }

    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }

    static deleteRow(element){
        if(element.classList.contains('fa-times-circle')){
            element.parentElement.parentElement.parentElement.remove();
        }
    }
}

// Document Load Event
document.addEventListener('DOMContentLoaded',() => {
    UI.displayBooks();
});

// Form Submit Event
document.querySelector('#book-form').addEventListener('submit',(e) => {

    // Prevent actual form Submission
    e.preventDefault();

    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let isbn = document.querySelector('#isbn').value;

    let book = new Book(title,author,isbn);
    UI.addBookToTable(book);
    UI.clearFields();

});

// Delete Functionality
document.querySelector('#table-body').addEventListener('click',(e) => {
    let element = e.target;
    UI.deleteRow(element);
});