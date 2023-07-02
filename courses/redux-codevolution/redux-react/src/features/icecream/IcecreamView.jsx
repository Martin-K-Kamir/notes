import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked, selectAllIcecreams } from "./icecreamSlice.js";
import { useState } from "react";

export const IcecreamView = () => {
    const [restockAmount, setRestockAmount] = useState(0)
    const numOfIcecreams = useSelector(selectAllIcecreams)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Number of ice creams - {numOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <button onClick={() => dispatch(restocked(+restockAmount))}>Restock ice creams</button>
            <div>
                <p>input restock amount:</p>
                <input type="number" value={restockAmount} onChange={(e) => setRestockAmount(e.target.value)}/>
            </div>
        </div>
    )
}