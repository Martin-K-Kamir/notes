import SortableTable from "../components/SortableTable.jsx";

export default function TablePage() {
    const config = [
        {
            label: "Name",
            render: ({ name }) => name,
            sortValue: ({ name }) => name,
        },
        {
            label: "Color",
            render: ({ color }) => (
                <div
                    className={`p-3 my-2 mx-10 w-6 h-6 rounded-full ${color}`}
                ></div>
            ),
        },
        {
            label: "Score",
            render: ({ score }) => score,
            sortValue: ({ score }) => score,
        },
    ];

    const data = [
        {
            name: "Orange",
            color: "bg-orange-500",
            score: 5,
        },
        {
            name: "Apple",
            color: "bg-red-500",
            score: 3,
        },
        {
            name: "Banana",
            color: "bg-yellow-500",
            score: 4,
        },
        {
            name: "Grape",
            color: "bg-purple-500",
            score: 2,
        },
    ];

    return (
        <div>
            <SortableTable
                data={data}
                config={config}
                keyFn={fruit => fruit.name}
            />
        </div>
    );
}
