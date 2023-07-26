import { useState } from "react";
import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Table from "./Table.jsx";

export default function SortableTable(props) {
    const { config, data } = props;
    const [sortOrder, setSortOrder] = useState(null);
    const [sortBy, setSortBy] = useState(null);

    const updatedConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th
                    className="select-none cursor-pointer hover:bg-gray-100"
                    onClick={() => handleClick(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

    function handleClick(label) {
        if (sortBy && label !== sortBy) {
            setSortOrder("asc");
            setSortBy(label);
            return;
        }

        if (sortOrder === null) {
            setSortOrder("asc");
            setSortBy(label);
        } else if (sortOrder === "asc") {
            setSortOrder("desc");
            setSortBy(label);
        } else if (sortOrder === "desc") {
            setSortOrder(null);
            setSortBy(null);
        }
    }

    let sortedData = data;
    if (sortOrder && sortBy) {
        const { sortValue } = config.find(column => column.label === sortBy);
        sortedData = [...data].sort((a, b) => {
            const valueA = sortValue(a);
            const valueB = sortValue(b);

            const reverseOrder = sortOrder === "desc" ? -1 : 1;

            if (typeof valueA === "string") {
                return valueA.localeCompare(valueB) * reverseOrder;
            } else {
                return (valueA - valueB) * reverseOrder;
            }
        });
    }

    return <Table {...props} config={updatedConfig} data={sortedData} />;
}

function getIcons(label, sortBy, sortOrder) {
    if (label !== sortBy || sortOrder === null) {
        return (
            <div>
                <GoTriangleUp />
                <GoTriangleDown />
            </div>
        );
    }

    if (sortOrder === "asc") {
        return (
            <div>
                <GoTriangleUp />
            </div>
        );
    }

    if (sortOrder === "desc") {
        return (
            <div>
                <GoTriangleDown />
            </div>
        );
    }
}
