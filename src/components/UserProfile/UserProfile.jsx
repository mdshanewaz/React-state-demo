import { useState } from "react";


export const UserProfile = () => {

    const [user, setUser] = useState({
        name : "Bruce Wayne",
        age : 30,
        email : "batman@justiceleague.com",
        address : {
            city : "Gotham City",
            country : "USA",
        }
    });

    console.log("Component rendering, user : ", user);

    const handleUpdateName = () => {
        setUser({
            ...user,
            name : "Clark Kent",
        });
    };


    const handleAge = () => {
        setUser({
            ...user,
            age : user.age+1
        });
    };

    const updateMultiple = () => {
        setUser({
            ...user,
            name : "Clark Kent",
            age : 32,
        });
    };

    const updateCity = () => {
        setUser({
            ...user,
            address : {
                ...user.address,
                city : "Metropolis",
            }
        });
    }

    return (
        <div>
            <h3>User Profile</h3>
            <h4>Name : {user.name}</h4>
            <h5>Age : {user.age}</h5>
            <h5>Email : {user.email}</h5>
            <p>City : {user.address.city}</p>
            <p>Country : {user.address.country}</p>
            <button onClick={handleUpdateName}>Change Name</button>
            <button onClick={handleAge}>Increase Age buy 1</button>
            <button onClick={updateMultiple}>Update Name and Age</button>
            <button onClick={updateCity}>Move to Metropolis</button>
        </div>
    );
}