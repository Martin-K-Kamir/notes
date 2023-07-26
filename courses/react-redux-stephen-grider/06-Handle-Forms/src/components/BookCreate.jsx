import { useState } from "react";

function generateId() {
    return Math.random().toString(36).substring(2, 9);
}

function BookCreate({ onCreate }) {
    const [form, setForm] = useState([
        {
            name: "title",
            label: "Title",
            type: "text",
            value: "",
        },
    ]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!form.every(field => field.value)) return;

        const book = form.reduce((acc, { name, value }) => {
            acc.id = generateId();
            acc[name] = value;
            return acc;
        }, {});

        setForm(prevState => {
            return prevState.map(field => ({
                ...field,
                value: field.type === "checkbox" ? false : "",
            }));
        });

        onCreate(book);
    }

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

    const renderedForm = form.map(({ name, label, type, value }) => (
        <div key={name}>
            <label htmlFor={name}>{label}</label>
            <input
                className="input"
                type={type}
                id={name}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </div>
    ));

    return (
        <form className="book-create" onSubmit={handleSubmit}>
            <h3>Add a Book</h3>
            {renderedForm}
            <button className="button" style={{ marginTop: "10px" }}>
                Create
            </button>
        </form>
    );
}

export default BookCreate;
