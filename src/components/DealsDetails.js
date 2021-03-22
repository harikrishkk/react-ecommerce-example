import React, { Component } from 'react';
import Container from './layouts/Container';
import Loader from './Loader';
import { Link } from 'react-router-dom';
import { connect, useSelector, useDispatch } from 'react-redux';
import {
  selectDealById,
  selectLoadingStatus,
} from '../redux-state/dealsReducer';
import { addToCart } from '../redux-state/cartActions';

const DealsDetails = (props) => {
  const id = props.match.params.id;
  const loading = useSelector(selectLoadingStatus);
  const deal = useSelector(selectDealById(id));
  const dispatch = useDispatch();

  if (loading || !deal) {
    return <Loader />;
  }

  const handleCart = () => {
    dispatch(addToCart(deal));
  };

  return (
    <Container>
      <Link to="/"> Back to Results </Link>
      <section className="mw7 center avenir">
        <h2 className="baskerville fw1 ph3 ph0-l">{deal.name}</h2>
        <article className="bt bb b--black-10">
          <a className="db pv4 ph3 ph0-l no-underline black dim" href="#0">
            <div className="flex flex-column flex-row-ns">
              <div className="pr3-ns mb4 mb0-ns w-100 w-40-ns">
                <img src={deal.imageUrl} className="db" alt={deal.name} />
              </div>
              <div className="w-100 w-60-ns pl3-ns">
                <h1 className="f4 fw1 mt0 lh-copy-ns">{deal.description}</h1>
                <p className="f6 f5-l lh-copy">
                  Price: ${deal.price} / Rating : {deal.rating}
                </p>
                <button
                  disabled={!deal.isAvailable}
                  onClick={handleCart}
                  className="f6 link dim br1 ph3 pv2 mb2 dib white bg-black"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </a>
        </article>
      </section>
    </Container>
  );
};

export default DealsDetails;
