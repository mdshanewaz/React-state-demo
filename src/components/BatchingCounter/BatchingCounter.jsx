import { useState } from "react";

export const BatchingCounter = () => {
    
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    const [isActive, setActive] = useState(false);

    console.log("Rendere phase");

    const handlClick = () => {
        
        // console.log("Before setcount: ", count);
        
        setCount((pre) => {
            // console.log("1st Previous : ", pre);
            return pre+1;
        });

        // console.log("After setcount (pre => pre+1), count is: ", count);

        setCount((pre) => {
            // console.log("2nd Previous : ", pre);
            return pre+5;
        });
        
        // console.log("After setcount (pre => pre+5), count is: ", count);

        setCount((pre) => {
            // console.log("3nd Previous : ", pre);
            return pre+10;
        });

        setName("Updated");

        setActive(true);

        // console.log("After setcount (pre => pre+10), count is: ", count);
    } 

    return (
        <div>
            <h2>Count : {count} </h2>
            <p>Name : {name}</p>
            <p>Active : {isActive ? "Available" : "Not Available"}</p>
            <button onClick={handlClick}>Update All Three </button>
        </div> 
    );
}