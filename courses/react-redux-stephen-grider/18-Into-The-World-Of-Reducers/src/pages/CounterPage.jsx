import { produce } from "immer";
import Button from "../components/Button.jsx";
import { useReducer } from "react";
import Panel from "../components/Panel.jsx";

const INCREMENT_COUNT = "INCREMENT";
const DECREMENT_COUNT = "DECREMENT";
const UPDATE_COUNT = "UPDATE_COUNT";
const SET_VALUE_TO_ADD = "SET_VALUE_TO_ADD";
const reducer = (state, { type, payload }) => {
    switch (type) {
        case INCREMENT_COUNT:
            state.count += 1;
            return;
        case DECREMENT_COUNT:
            state.count -= 1;
            return;
        case SET_VALUE_TO_ADD:
            state.valueToAdd = payload;
            return;
        case UPDATE_COUNT:
            state.count += state.valueToAdd;
            state.valueToAdd = 0;
            return;
        default:
            return state;
    }
};
export default function CounterPage({ initialCount }) {
    // const [count, setCount] = useState(initialCount);
    // const [valueToAdd, setValueToAdd] = useState(0);
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });

    function increment() {
        // setCount(prevCount => prevCount + 1);
        dispatch({
            type: INCREMENT_COUNT,
        });
    }

    function decrement() {
        // setCount(prevCount => prevCount - 1);
        dispatch({
            type: DECREMENT_COUNT,
        });
    }

    function handleChange(e) {
        const value = parseInt(e.target.value, 10) || 0;

        dispatch({
            type: SET_VALUE_TO_ADD,
            payload: value,
        });

        // setValueToAdd(parseInt(value, 10) || 0);
    }

    function handleSubmit(e) {
        e.preventDefault();

        dispatch({
            type: UPDATE_COUNT,
        });

        // setCount(prevCount => prevCount + valueToAdd);
        // setValueToAdd(0);
    }

    return (
        <Panel className="m-3">
            <h1 className="text-lg font-bold">Count is {state.count}</h1>
            <div className="flex flex-row gap-4 mt-3">
                <Button primary onClick={increment}>
                    Increment
                </Button>
                <Button onClick={decrement}>Decrement</Button>
            </div>

            <form className="mt-3" onSubmit={handleSubmit}>
                <label htmlFor="add">Add a lot!</label>
                <input
                    id="add"
                    type="number"
                    className="p-1 m-3 bg-gray-50 border border-gray-300"
                    value={state.valueToAdd ?? ""}
                    onChange={handleChange}
                />
                <Button primary>Add it!</Button>
            </form>
        </Panel>
    );
}
