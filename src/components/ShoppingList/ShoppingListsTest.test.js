import { screen, render } from '@testing-library/react';
import ShoppingLists from './ShoppingLists';

describe('Shopping lists', () => {
  it('renders shopping lists', () => {
    const shoppingList = [
      {
        id: 1,
        created_at: 'today',
        name: 'Kyles List',
        shoppingItems: [
          {
            item: 'bananas',
          },
        ],
      },
    ];
    render(<ShoppingLists shoppingLists={shoppingList} />);

    expect(screen.getByTestId('shopping-list-1')).not.toBe(null);
  });
});
