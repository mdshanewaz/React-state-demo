import { useState } from "react";

export const SimpleCounter = () => {
    
    const [count, setCount] = useState(0);
    console.log("Rendere phase : ", count);

    const handlClick = () => {
        console.log("Before setcount: ", count);
        setCount(count+1);
        console.log("After setcount (count+1): ", count);
        setCount(count+5);
        console.log("After setcount (count+5): ", count);
        setCount(count+10);
        console.log("After setcount (count+10): ", count);

        setTimeout(() => {
            console.log("After 2 seconds, count is : ", count);
        }, 2000);
    } 

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={handlClick}>Increment </button>
        </div> 
    );
}