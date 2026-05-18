import {useState} from "react";

function BetterSignupForm() {
    const [formData, setFormData] = useState({firstName: "", lastName: "", password: ""});

    const handleChange = (evt) => {
        // const changedField = evt.target.name;
        // const newValue = evt.target.value;
        setFormData((currData) => {
            // currData[changeField] = newValue;
            // return {...currData};
            return {
                ...currData,
                // [changedField]: newValue,
                [evt.target.name]: evt.target.value,
            };
        });
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

    }
    return (
        <div>
            <label htmlFor="firstName">First Name: </label>
            <input
                type="text"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                id="firstName"
                name="firstName"
            />
            <label htmlFor="lastName"> Last Name: </label>
            <input
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                id="lastName"
                name="lastName"
            />
            <label htmlFor="password"> Password: </label>
            <input
                type="password"
                placeholder="password"
                value={formData.password}
                onChange={handleChange}
                id="password"
                name="password"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default BetterSignupForm;