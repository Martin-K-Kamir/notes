import CarForm from "./components/CarForm.jsx";
import CarList from "./components/CarList.jsx";
import CarSearch from "./components/CarSearch.jsx";
import CarValue from "./components/CarValue.jsx";

export default function App() {
    return (
        <div className="container is-fluid">
            <CarForm />
            <CarSearch />
            <CarList />
            <CarValue />
        </div>
    );
}
