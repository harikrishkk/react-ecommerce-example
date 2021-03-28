import React from 'react';

import CurrencyContext from '../contexts/CurrencyContext';
import { formatMoney } from '../utils/format-money';
import { useSelector, useDispatch } from 'react-redux';
import { selectCartItems, getCartTotal } from '../redux-state/cartReducer';
import { removeItemFromCart } from '../redux-state/cartActions';

const Cart = () => {
  const { currency } = React.useContext(CurrencyContext);
  const cart = useSelector(selectCartItems);
  const cartTotal = useSelector(getCartTotal);
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeItemFromCart(item.id));
    // removeItemFromCart(item.id)
  };

  if (cart.length === 0) {
    return (
      <h1 className="tc sc-gsTCUz mt2 mb0 f6 fw4 ttu tracked">
        Cart is empty. Start shopping now !!
      </h1>
    );
  }

  return (
    <>
      {cart.map((item) => {
        return (
          <main key={item.id} className="mw6 center">
            <article className="dt w-100 bb b--black-05 pb2 mt2" href="#0">
              <div className="dtc w2 w3-ns v-mid">
                <img
                  src={item.imageUrl}
                  className="ba b--black-10 db br2 w2 w3-ns h2 h3-ns"
                />
              </div>
              <div className="dtc v-mid pl3">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">{item.name}</h1>
                <h2 className="f6 fw4 mt0 mb0 black-60">
                  Price: {item.price} x Qty {item.quantity}
                </h2>
              </div>
              <div className="dtc v-mid">
                <form className="w-100 tr">
                  <button
                    className="f6 button-reset bg-white ba 
                 b--black-10 dim pointer pv1 black-60"
                    type="button"
                    onClick={() => handleRemoveCart(item)}
                  >
                    Remove One From Cart
                  </button>
                </form>
              </div>
            </article>
          </main>
        );
      })}
      <div className="mw6 center">
        <p className="tr">
          Total is: <strong> {formatMoney(currency, cartTotal)} </strong>
        </p>
      </div>
    </>
  );
};

export default Cart;
