import { screen, render } from '@testing-library/react';

import ShoppingList from './ShoppingList';

describe('shopping list component', () => {
  const shoppingList = {
    id: 1,
    created_at: 'today',
    name: 'Kyles List',
    shoppingItems: [
      {
        item: 'bananas',
        id: 1,
      },
    ],
  };
  it('renders each shopping list item', () => {
    render(<ShoppingList shoppingList={shoppingList} />);

    expect(screen.getByTestId('shopping-list-1')).not.toBe(null);
  });
});
