import { useState } from "react";
import BookEdit from "./BookEdit.jsx";
import useBooksContext from "../hooks/useBooksContext.jsx";

function BookShow({ title, id }) {
    const { deleteBook } = useBooksContext();
    const [showEdit, setShowEdit] = useState(false);

    function handleEdit() {
        setShowEdit(false);
    }

    function handleDeleteClick() {
        deleteBook(id);
    }

    function handleEditClick() {
        setShowEdit(prevState => !prevState);
    }

    return (
        <div className="book-show">
            <img
                src={`https://picsum.photos/seed/${id}/200`}
                alt={`Cover of book for ${title}`}
            />
            {showEdit ? (
                <BookEdit key={id} title={title} id={id} onEdit={handleEdit} />
            ) : (
                <h3>{title}</h3>
            )}
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
