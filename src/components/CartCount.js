import React from 'react';
import { Link } from 'react-router-dom';
import { selectCartItemsCount } from '../redux-state/cartReducer';
import { useSelector } from 'react-redux';

const CartCount = ({ title, icon, to }) => {
  const cartCount = useSelector(selectCartItemsCount);
  return (
    <Link
      className="f6 f5-l link bg-animate black-80 
       hover-bg-lightest-blue dib pa3 ph4-l"
      to={to}
    >
      <span> {icon}</span> {title}
      <span className="cart-total"> {cartCount} </span>
    </Link>
  );
};

export default CartCount;
