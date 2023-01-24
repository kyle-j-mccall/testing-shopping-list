import { useState } from 'react';

export default function ShoppingListItem({
  shoppingItem,
  onUpdateShoppingItem,
  onDeleteShoppingItem,
}) {
  const [nameUpdate, setNameUpdate] = useState(
    shoppingItem.item_name
  );
  const [quantityUpdate, setQuantityUpdate] = useState(
    shoppingItem.quantity
  );
  return (
    <div>
      <ul>
        <li>
          <p>
            {shoppingItem.item_name}: {shoppingItem.quantity}
          </p>

          <input
            value={nameUpdate}
            type="text"
            onChange={(e) => setNameUpdate(e.target.value)}
          ></input>
          <input
            value={quantityUpdate}
            type="number"
            onChange={(e) => setQuantityUpdate(e.target.value)}
          ></input>
          <button
            onClick={(e) => {
              e.preventDefault();
              onUpdateShoppingItem({
                ...shoppingItem,
                item_name: nameUpdate,
                quantity: quantityUpdate,
              });
            }}
          >
            Update
          </button>

          <button
            onClick={() => {
              onDeleteShoppingItem(shoppingItem);
            }}
          >
            Delete
          </button>
        </li>
      </ul>
    </div>
  );
}
