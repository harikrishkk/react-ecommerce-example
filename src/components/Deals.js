import React from 'react';

import Container from './layouts/Container';
import Card from './Card';
import Rating from './Rating';
import SearchBar from './SearchBar';
import Loader from './Loader';
import { connect, useSelector } from 'react-redux';

import {
  selectFilteredDeals,
  selectLoadingStatus,
  selectLoadingError,
} from '../redux-state/dealsReducer';

const Deals = () => {
  const filteredDeals = useSelector(selectFilteredDeals);
  const loading = useSelector(selectLoadingStatus);
  const error = useSelector(selectLoadingError);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <h1> Loading failed SHow alert message ... </h1>;
  }
  return (
    <div>
      <header className="tc ph4">
        <h1 className=" ttu f3 black-90 mv3">Deal of the day</h1>
      </header>
      <Container>
        <SearchBar />
        <section className="flex flex-wrap">
          {filteredDeals.map((product) => {
            const { id, rating } = product;
            return (
              <Card key={id} data={product}>
                <Rating rating={rating} />
              </Card>
            );
          })}
        </section>
      </Container>
    </div>
  );
};

export default Deals;
