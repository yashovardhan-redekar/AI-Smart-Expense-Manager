import { useState } from "react";

function NameInput() {
    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [city,setCity] = useState("");

    return(
        <>
            <h2>Enter your name:</h2>
            <h2>Enter your Age :</h2>
            <h2>Enter Your City</h2>
            <input
            type = "text"
            placeholder = "Enter Your Name:"
            value = {name}
            onChange = {(e) => setName(e.target.value)}
            />
            <input 
            type = "number"
            placeholder = "ENter your age"
            value = {age}
            onChange = {(a) => setAge(parseInt(a.target.value))}
            />

            <input
            type = "text"
            placeholder = "Enter Your City:"
            value = {city}
            onChange = {(c) => setCity(c.target.value)}
            />
            {name && <h3>Hello {name}!</h3>}
            {age && <h3>Your age is : {age}</h3>} 
            {city && <h3>Your City is : {city}</h3>}
            
        </>
    );
}

export default NameInput;