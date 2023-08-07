import { useDispatch, useSelector } from "react-redux";
import { selectForm, changeName, changeCost, addCar } from "../store/index.js";

export default function CarForm() {
    const dispatch = useDispatch();
    const { name, cost } = useSelector(selectForm);

    function handleNameChange(e) {
        const { value } = e.target;
        dispatch(changeName(value));
    }

    function handleCostChange(e) {
        const { value } = e.target;
        const cost = parseInt(value.replace(/\s+/g, ""), 10) || 0;
        dispatch(changeCost(cost));
    }

    function handleSubmit(e) {
        e.preventDefault();
        dispatch(
            addCar({
                name,
                cost,
            })
        );
    }

    return (
        <div className="car-form panel">
            <h4 className="subtitle is-3">Add Car</h4>
            <form onSubmit={handleSubmit}>
                <div className="field-groupd">
                    <div className="field">
                        <label className="label" htmlFor="nameInput">
                            Name
                        </label>
                        <input
                            type="text"
                            id="nameInput"
                            className="input is-expanded"
                            value={name}
                            onChange={handleNameChange}
                        />
                    </div>
                    <div className="field">
                        <label className="label" htmlFor="nameInput">
                            Cost
                        </label>
                        <input
                            type="number"
                            id="nameInput"
                            className="input is-expanded"
                            value={cost || ""}
                            onChange={handleCostChange}
                            placeholder={"0"}
                        />
                    </div>
                    <button className="button is-link">Submit</button>
                </div>
            </form>
        </div>
    );
}
