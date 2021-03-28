import { combineReducers } from 'redux';
import dealsReducers from './dealsReducer';
import cartReducer from './cartReducer';

export default combineReducers({
  deals: dealsReducers,
  cart: cartReducer,
});
