import { screen, render } from '@testing-library/react';

import ShoppingListForm from './ShoppingListForm';

describe('shopping list form', () => {
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

  it('form renders a submit button', () => {
    render(<ShoppingListForm id="1" />);

    // eslint-disable-next-line max-len
    expect(
      screen.getByTestId('shopping-list-form-submit-button-1')
    ).not.toBe(null);
  });
});
