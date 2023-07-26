import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel.jsx";

function Dropdown({ options, value, onChange }) {
    const [isOpen, setIsOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick, true);

        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    function handleOutsideClick(e) {
        if (!ref.current?.contains(e.target)) {
            setIsOpen(false);
        }
    }

    function handleClick() {
        setIsOpen(prevIsOpen => !prevIsOpen);
    }

    function handleChange(option) {
        onChange(option);
        setIsOpen(false);
    }

    const renderedOptions = options.map(({ label, value }) => {
        return (
            <div
                className="hover:bg-sky-100 rounded cursor-pointer p-1"
                key={value}
                onClick={() => handleChange({ label, value })}
            >
                {label}
            </div>
        );
    });

    return (
        <div className="w-48 relative" ref={ref}>
            <Panel
                className="flex justify-between items-center cursor-pointer select-none"
                onClick={handleClick}
            >
                {value?.label ?? "Select an option"}
                <GoChevronDown className="text-lg" />
            </Panel>
            {isOpen && (
                <Panel className="absolute top-full">{renderedOptions}</Panel>
            )}
        </div>
    );
}

export default Dropdown;
