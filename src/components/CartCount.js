import React from 'react';
import { Link } from 'react-router-dom';
import DealsContext from '../contexts/DealsContext';

const CartCount = ({ title, icon, to }) => {
  const context = React.useContext(DealsContext);
  const count = context.cart.reduce((acc, item) => {
    return item.quantity + acc;
  }, 0);
  return (
    <Link
      className="f6 f5-l link bg-animate black-80 
       hover-bg-lightest-blue dib pa3 ph4-l"
      to={to}
    >
      <span> {icon}</span> {title}
      <span className="cart-total"> {count} </span>
    </Link>
  );
};

export default CartCount;
