import ShoppingListItem from './ShoppingListItem.jsx'

function ShoppingList({items}) {
    return (
        <ul>
            {items.map((item) => (
                <ShoppingListItem
                    key={item.id}
                    // item={item.item}
                    // quantity={item.quantity}
                    // completed={item.completed}
                    {...item}/>
            ))}
        </ul>
    );
}

export default ShoppingList;
