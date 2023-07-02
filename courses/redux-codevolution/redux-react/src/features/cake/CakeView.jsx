import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked, selectAllCakes } from "./cakeSlice.js";
export const CakeView = () => {
    const numOfCakes = useSelector(selectAllCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of cakes - {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    )
}