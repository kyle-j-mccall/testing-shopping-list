import { screen, render } from '@testing-library/react';
import ShoppingListItem from './ShoppingListItem';

describe('shopping list items', () => {
  it('renders a shopping item', () => {
    const shoppingItem = {
      item_name: 'food',
      quantity: 10,
    };
    render(<ShoppingListItem shoppingItem={shoppingItem} />);
  });
});
