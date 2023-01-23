export default function ShoppingListItem({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) {
  return (
    <div>
      <ul>
        <li>
          <p>{shoppingItem.item_name}</p>
          <input
            type="checkbox"
            onChange={onUpdateShoppingItem}
          ></input>
          <button onClick={onDeleteShoppingItem}>Delete</button>
        </li>
      </ul>
    </div>
  );
}
