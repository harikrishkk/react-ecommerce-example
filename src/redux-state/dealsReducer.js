import * as actions from './actionType';
import { createSelector } from 'reselect';

// Store's default state
const INITIAL_STATE = {
  deals: [],
  loading: false,
  error: null,
  filterVal: '',
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

    case actions.SEARCH_PRODUCTS: {
      return {
        ...state,
        filterVal: action.payload.filterVal,
      };
    }

    default:
      return state;
  }
}

// Selectors :

// {
//   deals: {  <-----
//     deals: [],
//     loading: false,
//     error: null,
//     filterVal: '', <------
//   }
// }

// Root slice
const selectDealsSlice = (state) => state.deals;

export const selectAllDeals = createSelector(
  selectDealsSlice,
  (deals) => deals.deals
);

export const selectFilter = createSelector(
  selectDealsSlice,
  (deals) => deals.filterVal
);

export const selectLoadingStatus = createSelector(
  selectDealsSlice,
  (deals) => deals.loading
);

export const selectLoadingError = createSelector(
  selectDealsSlice,
  (deals) => deals.error
);

export const selectFilteredDeals = createSelector(
  selectAllDeals,
  selectFilter,
  (deals, filterVal) => {
    return deals.filter((deal) =>
      deal.name.toLowerCase().includes(filterVal.toLowerCase())
    );
  }
);

export const selectDealById = (id) => {
  return createSelector(selectAllDeals, (deals) =>
    deals.find((item) => item.id === id)
  );
};
