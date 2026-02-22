import { useContext } from "react";
import { use } from "react";
import { UserContext } from "../../../../../context/UserContext/UserContext";

export const Avatar = ({ isLoading=true }) => {
    if(isLoading) {
        return(
            <div>
                Loading user Data...
            </div>
        );
    }
    const { user, setUser } = use(UserContext);

    const toggleTheme= () => {
        setUser({
            ...user,
            theme : user.theme === "dark" ? "light" : "dark",
        });
    };

    return (
    <div>
        <p>Welcome, {user.name}!</p>
        <p>Current Theme : {user.theme} </p>
        <button onClick={toggleTheme}>Change Theme</button>
    </div>
    );
};