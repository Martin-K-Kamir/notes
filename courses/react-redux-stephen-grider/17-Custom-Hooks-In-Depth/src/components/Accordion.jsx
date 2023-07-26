import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

function Accordion({ items }) {
    const [activeIndex, setActiveIndex] = useState(-1);

    function handleClick(nextActiveIndex) {
        setActiveIndex(prevActiveIndex =>
            prevActiveIndex === nextActiveIndex ? -1 : nextActiveIndex
        );
    }

    const renderedItems = items.map(({ id, label, content }, index) => {
        const isActive = index === activeIndex;

        const icon = (
            <span className="text-xl">
                {isActive ? <GoChevronDown /> : <GoChevronLeft />}
            </span>
        );

        return (
            <div key={id}>
                <div
                    className="flex justify-between items-center border-b p-3 bg-gray-50 cursor-pointer"
                    onClick={() => handleClick(index)}
                >
                    {label}
                    {icon}
                </div>
                {isActive && <div className="border-b p-5">{content}</div>}
            </div>
        );
    });

    return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
