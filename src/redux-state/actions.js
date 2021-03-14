import * as actions from './actionType';
import axios from '../api/axios';
// Actions is always a collection of function that can be called by the component.
// Trigger
export const loadAllDeals = () => (dispatch) => {
  // TRIGGERED ==> loader
  dispatch({ type: actions.LOAD_ALL_DEALS });
  // somethign async
  axios
    .get('/deals.json')
    .then((res) => {
      const products = [];
      Object.keys(res.data).forEach((key) => {
        const prod = {
          ...res.data[key],
          id: key,
        };
        products.push(prod);
      });
      dispatch(loadAllDealsSuccess(products));
    })
    .catch((err) => {
      dispatch(loadDealsFail(err));
    });
};

// If trigger is success
export const loadAllDealsSuccess = (deals) => {
  return {
    type: actions.LOAD_ALL_DEALS_SUCCESS,
    payload: {
      deals,
    },
  };
};

// If trigger is failure
export const loadDealsFail = (error) => {
  return {
    type: actions.LOAD_ALL_DEALS_FAIL,
    payload: {
      error,
    },
  };
};
