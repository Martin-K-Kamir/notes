import Button from "../components/Button.jsx";
import useCounter from "../hooks/useCounter.jsx";

export default function CounterPage() {
    const { count, increment } = useCounter(0);

    return (
        <div>
            <h1>{count}</h1>
            <Button primary onClick={increment}>
                Increment
            </Button>
        </div>
    );
}
