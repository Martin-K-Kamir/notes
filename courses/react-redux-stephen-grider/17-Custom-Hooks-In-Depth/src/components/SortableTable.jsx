import { GoTriangleUp, GoTriangleDown } from "react-icons/go";
import Table from "./Table.jsx";
import useSort from "../hooks/useSort.jsx";

export default function SortableTable(props) {
    const { config, data } = props;
    const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
        data,
        config
    );

    const updatedConfig = config.map(column => {
        if (!column.sortValue) {
            return column;
        }

        return {
            ...column,
            header: () => (
                <th
                    className="select-none cursor-pointer hover:bg-gray-100"
                    onClick={() => setSortColumn(column.label)}
                >
                    <div className="flex items-center">
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </div>
                </th>
            ),
        };
    });

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
