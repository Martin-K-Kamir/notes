import { useDispatch, useSelector } from "react-redux";
import { selectCars, deleteCar, selectForm } from "../store/index.js";

export default function CarList() {
    const dispatch = useDispatch();
    const { data, searchTerm } = useSelector(selectCars);
    const { name: nameInput } = useSelector(selectForm);

    function handleCarDelete(id) {
        dispatch(deleteCar(id));
    }

    const filteredData = data.filter(({ name }) =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const renderedCars = filteredData.map(({ id, name, cost }) => {
        const isBold =
            nameInput && name.toLowerCase().includes(nameInput.toLowerCase());

        return (
            <div key={id} className={`panel ${isBold ? "bold" : ""}`}>
                <p>
                    {name} - ${cost}
                </p>
                <button
                    className="button is-danger"
                    onClick={() => handleCarDelete(id)}
                >
                    X
                </button>
            </div>
        );
    });
    return (
        <div className="car-list">
            {renderedCars}
            <hr />
        </div>
    );
}
