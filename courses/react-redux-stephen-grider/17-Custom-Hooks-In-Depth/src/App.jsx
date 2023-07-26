import Link from "./components/Link.jsx";
import Route from "./components/Route.jsx";
import Sidebar from "./components/Sidebar.jsx";
import AccordionPage from "./pages/AccordionPage.jsx";
import DropdownPage from "./pages/DropdownPage.jsx";
import ButtonPage from "./pages/ButtonPage.jsx";
import ModalPage from "./pages/ModalPage.jsx";
import TablePage from "./pages/TablePage.jsx";
import CounterPage from "./pages/CounterPage.jsx";

function App() {
    return (
        <div className="container mx-auto grid grid-cols-6 gap-4 mt-4">
            <Sidebar />
            <div className="col-span-5">
                <Route path="/">
                    <AccordionPage />
                </Route>
                <Route path="/dropdown">
                    <DropdownPage />
                </Route>
                <Route path="/buttons">
                    <ButtonPage />
                </Route>
                <Route path="/modal">
                    <ModalPage />
                </Route>
                <Route path="/table">
                    <TablePage />
                </Route>
                <Route path="/counter">
                    <CounterPage />
                </Route>
            </div>
        </div>
    );
}

export default App;
