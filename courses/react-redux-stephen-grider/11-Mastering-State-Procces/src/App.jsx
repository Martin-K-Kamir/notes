import Accordion from "./components/Accordion.jsx";

function App() {
    const items = [
        {
            id: "1",
            label: "What is React?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus deleniti doloribus harum laboriosam laborum magni optio praesentium quae quaerat repellendus?",
        },
        {
            id: "2",
            label: "Why use React?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, non.",
        },
        {
            id: "3",
            label: "How do you use React?",
            content:
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae blanditiis, distinctio dolorum excepturi exercitationem, fugit id nam odit possimus quae quibusdam repellat sequi tempora, tenetur!",
        },
    ];

    return (
        <div>
            <Accordion items={items} />
        </div>
    );
}

export default App;
