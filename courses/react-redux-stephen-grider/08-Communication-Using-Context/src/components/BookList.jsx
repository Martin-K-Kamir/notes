import BookShow from "./BookShow.jsx";
import useBooksContext from "../hooks/useBooksContext.jsx";

function BookList() {
    const { books } = useBooksContext();

    const renderedBooks = books.map(book => {
        return <BookShow key={book.id} {...book} />;
    });

    return <div className="book-list">{renderedBooks}</div>;
}

export default BookList;
