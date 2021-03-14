import React from 'react';

import Container from './layouts/Container';
import Card from './Card';
import Rating from './Rating';
import SearchBar from './SearchBar';
import Loader from './Loader';
import DealsContext from '../contexts/DealsContext';

const Deals = () => {
  const { loading, products, filterVal } = React.useContext(DealsContext);

  const filteredDeals = products.filter((item) =>
    item.name.toLowerCase().includes(filterVal.toLowerCase())
  );

  if (loading) {
    return <Loader />;
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
