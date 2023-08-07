import { useSelector } from "react-redux";
import { selectCars } from "../store/index.js";

export default function CarValue() {
    const { data, searchTerm } = useSelector(selectCars);

    const totalCost = data
        .filter(({ name }) =>
            name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .reduce((acc, { cost }) => acc + cost, 0);

    return <div className="car-value">Total Cost: ${totalCost}</div>;
}
