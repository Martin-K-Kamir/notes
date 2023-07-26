import { useEffect } from "react";
import BookCreate from "./components/BookCreate.jsx";
import BookList from "./components/BookList.jsx";
import useBooksContext from "./hooks/useBooksContext.jsx";

function App() {
    const { fetchBooks } = useBooksContext();

    useEffect(() => {
        fetchBooks();
    }, []);

    return (
        <div className="app">
            <h1>Book List</h1>
            <BookList />
            <BookCreate />
        </div>
    );
}

export default App;
