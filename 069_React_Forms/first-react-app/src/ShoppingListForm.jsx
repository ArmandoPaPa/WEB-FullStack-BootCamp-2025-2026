import { useState } from "react";

function ShoppingListForm({ addItem }) {
    const [ formData, setFormData ] = useState({product: "", quantity: ""});
    const handleChange = (evt) => {
        setFormData(currData => {
            return {
                ...currData,
                [evt.target.name]: evt.target.value
            }
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addItem(formData);
        setFormData({product: "", quantity: ""});
    };
    return(
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
            <label htmlFor="quantity"> Quantity: </label>
            <input
                type="number"
                placeholder="1"
                name="quantity"
                id="quantity"
                onChange={handleChange}
                value={formData.quantity}
            />
            <button>Add Item</button>

        </form>
    );
}

export default ShoppingListForm;
