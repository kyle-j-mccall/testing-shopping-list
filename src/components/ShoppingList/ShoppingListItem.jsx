export default function ShoppingListItem({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) {
  return (
    <div>
      <ul>
        <li>
          <p>
            {shoppingItem.item_name}: {shoppingItem.quantity}
          </p>
          <input
            type="checkbox"
            onChange={onUpdateShoppingItem}
          ></input>
          <button
            onClick={async () => {
              await onDeleteShoppingItem(shoppingItem);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
