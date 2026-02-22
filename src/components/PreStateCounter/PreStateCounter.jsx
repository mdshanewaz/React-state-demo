import { useState } from "react";

export const PreStateCounter = () => {
    
    const [count, setCount] = useState(0);
    console.log("Rendere phase : ", count);

    const handlClick = () => {
        
        console.log("Before setcount: ", count);
        
        setCount((pre) => {
            console.log("1st Previous : ", pre);
            return pre+1;
        });

        // console.log("After setcount (pre => pre+1), count is: ", count);

        setCount((pre) => {
            console.log("2nd Previous : ", pre);
            return pre+5;
        });
        
        // console.log("After setcount (pre => pre+5), count is: ", count);

        setCount((pre) => {
            console.log("3nd Previous : ", pre);
            return pre+10;
        });

        // console.log("After setcount (pre => pre+10), count is: ", count);
    } 

    return (
        <div>
            <h2>Count : {count} </h2>
            <button onClick={handlClick}>Increment </button>
        </div> 
    );
}