import Link from "./Link.jsx";

export default function Sidebar() {
    const links = [
        {
            label: "Accordion",
            path: "/",
        },
        {
            label: "Dropdown",
            path: "/dropdown",
        },
        {
            label: "Buttons",
            path: "/buttons",
        },
    ];

    const renderedLinks = links.map(({ label, path }) => {
        return (
            <Link
                className="mb-3"
                activeClassName="font-bold border-l-4 border-blue-500 pl-2"
                key={label}
                to={path}
            >
                {label}
            </Link>
        );
    });

    return (
        <div className="sticky top-0 overflow-y-auto flex flex-col items-start">
            {renderedLinks}
        </div>
    );
}
