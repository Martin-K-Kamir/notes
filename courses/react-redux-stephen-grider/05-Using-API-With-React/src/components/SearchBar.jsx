import { useState } from "react";

function SearchBar({ handleSearch }) {
    const [search, setSearch] = useState("");

    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(search);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="search"
                value={search}
                onChange={handleChange}
            />
            <button>search</button>
        </form>
    );
}

export default SearchBar;
