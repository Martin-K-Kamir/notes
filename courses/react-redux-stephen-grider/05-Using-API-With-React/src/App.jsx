import { useState } from "react";
import SearchBar from "./components/SearchBar.jsx";
import ImageList from "./components/ImageList.jsx";
import searchImages from "./api";

function App() {
    const [images, setImages] = useState([]);

    async function handleSearch(query) {
        const data = await searchImages(query);
        setImages(data);
    }

    return (
        <div>
            <SearchBar handleSearch={handleSearch} />
            <ImageList images={images} />
        </div>
    );
}

export default App;
