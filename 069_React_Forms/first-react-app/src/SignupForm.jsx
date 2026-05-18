import {useState} from "react";

function SignupForm() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const updateFirstName = (evt) => {
        setFirstName(evt.target.value);
    }
    const updateLastName = (evt) => {
        setLastName(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        
    }
    return (
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={updateFirstName}
                id="firstName"
            />
            <label htmlFor="lastName"> Last Name: </label>
            <input
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={updateLastName}
                id="lastName"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default SignupForm;