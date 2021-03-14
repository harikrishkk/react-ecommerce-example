import * as actions from './actionType';

// Store's default state
const INITIAL_STATE = {
  deals: [],
  loading: false,
  error: false,
};

export default function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actions.LOAD_ALL_DEALS:
      return {
        ...state,
        loading: true,
      };
    case actions.LOAD_ALL_DEALS_SUCCESS:
      return {
        ...state,
        loading: false,
        deals: action.payload.deals,
      };
    case actions.LOAD_ALL_DEALS_FAIL:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
      };
    default:
      return state;
  }
}
