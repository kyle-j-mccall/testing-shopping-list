import { screen, render } from '@testing-library/react';
import ShoppingListForm from './ShoppingListForm';
import ShoppingLists from './ShoppingLists';

describe('Shopping list form', () => {
  const shoppingList = {
    id: 1,
    created_at: 'today',
    name: 'Kyles List',
  };
  render(<ShoppingLists shoppingLists={shoppingList} />);

  expect(screen.getByTestId('shopping-lists')).not.toBe(null);
});
