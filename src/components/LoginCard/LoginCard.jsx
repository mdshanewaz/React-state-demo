import { useState } from "react";

export const LoginCard = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [message, setMessage] = useState("");
    
    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    const handleMessage = (e) => {
        setMessage(e.target.value);
    };

    return (
        <>
            <button onClick={handleLogin}>{ isLoggedIn ? "Logout" : "Login"}</button>

            <input type="text" placeholder="Type a message" value={message} onChange={handleMessage} />
            <p>{message}</p>
        </>
    );
};