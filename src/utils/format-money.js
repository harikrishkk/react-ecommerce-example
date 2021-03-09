export const formatMoney = (currency = 'USD', price) => {
  if (currency === 'CAD') {
    return `${currency} ${Number(price).toFixed(2)}`;
  }
  if (currency === 'INR') {
    const CONVERSION = 55;
    return `${currency} ${Number(price * CONVERSION).toFixed(2)}`;
  }
};
