import { screen, render, fireEvent } from '@testing-library/react';

import ShoppingListForm from './ShoppingListForm';

describe('shopping list form', () => {
  it('form renders a submit button', () => {
    render(<ShoppingListForm id="1" />);

    // eslint-disable-next-line max-len
    expect(
      screen.getByTestId('shopping-list-form-submit-button-1')
    ).not.toBe(null);
  });
  it('form value is changed on on submit', () => {
    const shoppingList = {
      id: null,
      name: '',
      shoppingItems: [],
    };
    const onSubmitItem = jest.fn();
    render(
      <ShoppingListForm
        id="1"
        onSubmit={onSubmitItem}
        shoppingList={shoppingList}
      />
    );

    fireEvent.change(
      // eslint-disable-next-line max-len
      screen.getByTestId('shopping-list-form-name-1'),
      { target: { value: 'test' } }
    );

    fireEvent.click(
      screen.getByTestId('shopping-list-form-submit-button-1')
    );

    // eslint-disable-next-line max-len
    expect(onSubmitItem).toHaveBeenCalledWith({
      ...shoppingList,
      name: 'test',
    });
  });
});
