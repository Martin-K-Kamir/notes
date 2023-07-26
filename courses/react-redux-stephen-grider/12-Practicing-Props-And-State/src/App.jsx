import { useState, useEffect } from "react";
import Dropdown from "./components/Dropdown.jsx";

function App() {
    const [selected, setSelected] = useState(null);

    const options = [
        {
            label: "red",
            value: "red",
        },
        {
            label: "green",
            value: "green",
        },
        {
            label: "blue",
            value: "blue",
        },
    ];

    function handleChange(option) {
        setSelected(option);
    }

    return (
        <div className="p-5 flex gap-5">
            <Dropdown
                options={options}
                value={selected}
                onChange={handleChange}
            />
            <Dropdown
                options={options}
                value={selected}
                onChange={handleChange}
            />
        </div>
    );
}

export default App;
