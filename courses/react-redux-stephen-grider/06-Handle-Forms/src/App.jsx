import { useState } from "react";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";

function App() {
    const [books, setBooks] = useState([]);

    function createBook(book) {
        setBooks(prevState => [...prevState, book]);
    }

    function deleteBook(id) {
        setBooks(prevState => prevState.filter(book => book.id !== id));
    }

    function editBook(id, updatedBook) {
        setBooks(prevState =>
            prevState.map(book => (book.id === id ? updatedBook : book))
        );
    }

    return (
        <div className="app">
            <h1>Book List</h1>
            <BookList books={books} onDelete={deleteBook} onEdit={editBook} />
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
