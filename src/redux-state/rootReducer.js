import { combineReducers } from 'redux';
import dealsReducers from './dealsReducer';

export default combineReducers({
  deals: dealsReducers,
});
