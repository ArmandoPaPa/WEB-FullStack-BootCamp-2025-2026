function ShoppingListItem({item, quantity, completed}) {
    return (
        <li
            style={{
                color: completed ? 'grey' : 'blue',
                textDecoration: completed ? "line-through" : "none",
            }}>
            {item} - {quantity}
        </li>
    )
}

export default ShoppingListItem;
