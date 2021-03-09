import React from 'react';

// Definition of a context, not an implementation
const CurrencyContext = React.createContext({
  currency: '',
  toggleCurrency: () => {},
});

export default CurrencyContext;
