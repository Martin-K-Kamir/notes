import { useEffect, useState } from "react";

export default function useCounter(initialCount) {
    const [count, setCount] = useState(initialCount);

    useEffect(() => {
        console.log(count);
    }, [count]);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return {
        count,
        increment,
    };
}
