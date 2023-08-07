import { useDispatch, useSelector } from "react-redux";
import { changeSearchTerm, selectCars } from "../store/index.js";

export default function CarSearch() {
    const dispatch = useDispatch();
    const { searchTerm } = useSelector(selectCars);

    function handleSearchTermChange(e) {
        const { value } = e.target;
        dispatch(changeSearchTerm(value));
    }

    return (
        <div className="list-header">
            <h3 className="title is-3">My Cars</h3>
            <div className="search field is-horizontal">
                <label className="label" htmlFor="search-input">
                    Search
                </label>
                <input
                    type="text"
                    className="input"
                    id="search-input"
                    value={searchTerm}
                    onChange={handleSearchTermChange}
                />
            </div>
        </div>
    );
}
