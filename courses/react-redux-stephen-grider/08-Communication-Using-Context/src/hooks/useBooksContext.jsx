import { useContext } from "react";
import BooksContext from "../context/BooksContext.jsx";

function useBooksContext() {
    const context = useContext(BooksContext);

    if (!context) {
        throw new Error(
            "useBooksContext must be used within a BooksContextProvider"
        );
    }

    return context;
}

export default useBooksContext;