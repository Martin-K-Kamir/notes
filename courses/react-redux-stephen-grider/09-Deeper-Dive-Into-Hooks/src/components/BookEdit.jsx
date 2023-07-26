import { useState } from "react";
import useBooksContext from "../hooks/useBooksContext.jsx";

function BookEdit({ title, id, onEdit }) {
    const { editBook } = useBooksContext();

    const [form, setForm] = useState([
        {
            id,
            name: "title",
            label: "Title",
            type: "text",
            value: title || "",
        },
    ]);

    function handleChange(e) {
        setForm(prevState => {
            const { name, value, checked, type } = e.target;

            return prevState.map(field =>
                field.name === name
                    ? {
                          ...field,
                          value: type === "checkbox" ? checked : value,
                      }
                    : field
            );
        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.every(field => field.value)) return;

        const book = form.reduce((acc, { name, value, id }) => {
            acc[name] = value;
            acc.id = id;
            return acc;
        }, {});

        onEdit();
        editBook(id, book);
    }

    const renderedForm = form.map(({ name, label, type, value, id }) => (
        <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
                className="input"
                type={type}
                id={id}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    ));

    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            {renderedForm}
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
