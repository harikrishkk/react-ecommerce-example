import * as actions from './actionType';

export const addToCart = (item) => {
  return {
    type: actions.ADD_ITEMS_TO_CART,
    payload: item,
  };
};

export const removeItemFromCart = (id) => {
  return {
    type: actions.REMOVE_ITEMS_FROM_CART,
    payload: id,
  };
};
