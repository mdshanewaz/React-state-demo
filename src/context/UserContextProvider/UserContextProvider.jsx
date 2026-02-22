import { useState } from "react";
import { UserContext } from "../UserContext/UserContext";

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({
        name : "Bruce",
        role : "admin",
        theme : "dark", 
    }) 

    return (
    <UserContext value={{ user, setUser }}>
        { children }
    </UserContext>
    )
};