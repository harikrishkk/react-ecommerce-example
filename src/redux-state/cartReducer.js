import * as actions from './actionType';
import { createSelector } from 'reselect';

const INIT_STATE = {
  cart: [],
};

const handleAddToCart = (state, item) => {
  const existingItem = state.cart.find((cartItem) => cartItem.id === item.id);
  if (state.cart.length === 0 || !existingItem) {
    const newItem = { ...item, quantity: 1 };
    return [...state.cart, newItem];
  }
  const updatedCart = state.cart.map((cartItem) => {
    if (cartItem.id === item.id) {
      return {
        ...cartItem,
        quantity: cartItem.quantity + 1,
      };
    }
    return cartItem;
  });

  return updatedCart;
};

const handleRemovalFromCart = (state, id) => {
  const currentItem = state.cart.find((cartItem) => cartItem.id === id);
  let currentQty = currentItem.quantity;
  if (currentQty === 1) {
    return state.cart.filter((cartItem) => cartItem.id !== id);
  }
  return state.cart.map((cartItem) =>
    cartItem.id === id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

export default function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case actions.ADD_ITEMS_TO_CART:
      return {
        ...state,
        cart: handleAddToCart(state, action.payload),
      };
    case actions.REMOVE_ITEMS_FROM_CART:
      return {
        ...state,
        cart: handleRemovalFromCart(state, action.payload),
      };

    default:
      return state;
  }
}

//Selectors

const selectCartSlice = (state) => state.cart;

export const selectCartItems = createSelector(
  selectCartSlice,
  (cart) => cart.cart
);

export const getCartTotal = createSelector(selectCartSlice, (cart) => {
  return cart.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
});

export const selectCartItemsCount = createSelector(selectCartSlice, (cart) =>
  cart.cart.reduce((acc, item) => acc + item.quantity, 0)
);
