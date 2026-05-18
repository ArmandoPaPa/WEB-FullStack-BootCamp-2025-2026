import {useState} from "react";

function ValidatedShoppingListForm({addItem}) {
    const [formData, setFormData] = useState({product: "", quantity: ""});
    const [productIsValid, setProductIsValid] = useState(false);
    const validate = (product) => {
        if (product.length === 0) {
            setProductIsValid(false);
        } else {
            setProductIsValid(true);
        }
    }
    const handleChange = (evt) => {
        if (evt.target.name === "product") {
            validate(evt.target.value);
        }
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (productIsValid) {
            addItem(formData);
            setFormData({product: "", quantity: ""});
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            {/*<h1>Product is: {formData.product} and Quantity is: {formData.quantity}</h1>*/}
            <label htmlFor="product">Product: </label>
            <input
                type="text"
                placeholder="Product name"
                name="product"
                id="product"
                onChange={handleChange}
                value={formData.product}
            />
            {!productIsValid && (<p style={{color: "red"}}>Product name cannot be empty</p>)}
            <label htmlFor="quantity"> Quantity: </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button disabled={!productIsValid}>Add Item</button>

        </form>
    );
}

export default ValidatedShoppingListForm;
