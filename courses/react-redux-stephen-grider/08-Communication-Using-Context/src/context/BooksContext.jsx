import { createContext, useState } from "react";
import axios from "axios";

const BooksContext = createContext();

const URL = "http://localhost:5174/books";

function Provider({ children }) {
    const [books, setBooks] = useState([]);

    async function fetchBooks() {
        const res = await axios.get(URL);
        setBooks(res.data);
    }

    async function createBook(book) {
        const res = await axios.post(URL, book);
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
        <BooksContext.Provider
            value={{ books, deleteBook, editBook, createBook, fetchBooks }}
        >
            {children}
        </BooksContext.Provider>
    );
}

export { Provider };
export default BooksContext;
