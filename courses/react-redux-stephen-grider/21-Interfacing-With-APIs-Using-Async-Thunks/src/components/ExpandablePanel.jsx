import { useState } from "react";
import { MdChevronLeft, MdExpandMore } from "react-icons/md";

export default function ExpandablePanel({ header, children }) {
    const [isExpanded, setIsExpanded] = useState(false);

    function handleClick() {
        setIsExpanded(!isExpanded);
    }

    return (
        <div className="mb-2 border rounded">
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div
                    className="cursor-pointer text-xl w-8 flex justify-end"
                    onClick={handleClick}
                >
                    {isExpanded ? <MdChevronLeft /> : <MdExpandMore />}
                </div>
            </div>
            {isExpanded && <div className="p-2 border-t">{children}</div>}
        </div>
    );
}
