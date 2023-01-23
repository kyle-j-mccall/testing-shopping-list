import { useState } from 'react';
import '../Design.css';

export default function ShoppingListItemForm({ onSubmit }) {
  const [itemName, setItemName] = useState('');
  const [itemQuantity, setItemQuantity] = useState(0);

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          console.log('submit');
          onSubmit({ item_name: itemName, quantity: itemQuantity });
        }}
      >
        <label>Add item</label>
        <input
          type="text"
          data-testid="shopping-item-form"
          onChange={(e) => setItemName(e.target.value)}
        ></input>
        <label>Quantity</label>
        <input
          type="number"
          onChange={(e) => setItemQuantity(e.target.value)}
        ></input>
        <button className="item-btn">Submit</button>
      </form>
    </div>
  );
}
