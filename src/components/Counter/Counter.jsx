import { useState } from "react";

export const Counter = () => {

    const [count, setCount] = useState(() => {
        console.log("Initial state function is called");
        return 0;
    })

    console.log("Count : ", count);

    const handleClick = () => {
        setCount(count+1);
    }

    return (
        <button onClick={handleClick}>Count : {count}</button>
    );
};