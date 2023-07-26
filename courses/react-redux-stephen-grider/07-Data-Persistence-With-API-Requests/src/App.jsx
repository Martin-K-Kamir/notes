import { useEffect, useState } from "react";
import axios from "axios";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";

const URL = "http://localhost:5174/books";

function App() {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const res = await axios.get(URL);
        setBooks(res.data);
    }

    useEffect(() => {
        fetchBooks();
    }, []);

    async function createBook(book) {
        const res = await axios.post(URL, book);
        console.log(res);
        setBooks(prevState => [...prevState, res.data]);
    }

    async function deleteBook(id) {
        await axios.delete(`${URL}/${id}`);

        setBooks(prevState => prevState.filter(book => book.id !== id));
    }

    async function editBook(id, updatedBook) {
        const res = await axios.put(`${URL}/${id}`, updatedBook);

        setBooks(prevState =>
            prevState.map(book =>
                book.id === id ? { ...book, ...res.data } : book
            )
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
